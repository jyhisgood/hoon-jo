#!/bin/bash

# Set the terminal color codes
red=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
blue=`tput setaf 4`
magenta=`tput setaf 5`
cyan=`tput setaf 6`
white=`tput setaf 7`
reset=`tput sgr0`

echo "${yellow}1. Write schema.prisma to create a table with prisma"
echo "2. Generate prisma with 'yarn prisma generate'${reset}\n"
read -p "Please enter a  name that will be the API route as a kebab-case: " kebabCase


# Convert the name to PascalCase
pascalCase=$(echo "$kebabCase" | awk -F- '{for(i=1;i<=NF;i++) printf("%s%s",toupper(substr($i,1,1)),substr($i,2));}')

# Convert the name to camelCase
camelCase=$(echo "${pascalCase}" | awk '{print tolower(substr($0,1,1)) substr($0,2)}')

# Convert the name to SCREAMING_SNAKE_CASE
screamingSnakeCase=$(echo "$kebabCase" | tr '-' '_' | tr '[:lower:]' '[:upper:]')


# Create folder for api calling on frontend
mkdir "./frontend/lib/api/queries/${kebabCase}"

# For API hooks using react-query 
cat > "./frontend/lib/api/queries/${kebabCase}/index.ts" <<EOF
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '~/lib/api/client';
import { CreateType, GetQuery, UpdateType } from './types';
import useApi from './useApi';

export const ${screamingSnakeCase}_KEY = '/${kebabCase}';

export default function use${pascalCase}(options?: GetQuery) {
  const { create, remove, update, getAll } = useApi(${screamingSnakeCase}_KEY);

  const { data, ...restResults } = useQuery(
    [${screamingSnakeCase}_KEY, options],
    () => getAll(options)
  );

  const { mutate: create${pascalCase} } = useMutation(
    (data: CreateType) => create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [${screamingSnakeCase}_KEY] });
      },
    }
  );

  const { mutate: patch${pascalCase} } = useMutation(
    (data: UpdateType) => update(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [${screamingSnakeCase}_KEY] });
      },
    }
  );

  const { mutate: delete${pascalCase} } = useMutation((id: number) => remove(id), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [${screamingSnakeCase}_KEY] });
    },
  });
  return {
    ${camelCase}s: data || [],
    create${pascalCase},
    patch${pascalCase},
    delete${pascalCase},
    ...restResults,
  };
}
EOF

echo "\n${green}Successfully created '/frontend/lib/api/queries/${kebabCase}/index.ts'"

# For Types for the entities
cat > "./frontend/lib/api/queries/${kebabCase}/types.ts" <<EOF
export type ${pascalCase}Type = {
  id: any;
  // need to define types 
  ...type
  createdAt: Date;
  updatedAt: Date;
};

export type CreateType = {
  // need to define types 
  ...type
};

export type UpdateType = {
  id: number;
  // need to define types 
  ...type
};

export type GetQuery = {
  where?: ${pascalCase}Type;
};
EOF

echo "Successfully created '/frontend/lib/api/queries/${kebabCase}/types.ts'"


# For API calls use axios
cat > "./frontend/lib/api/queries/${kebabCase}/useApi.ts" <<EOF
import { AxiosRequestConfig } from 'axios';
import client from '../../client';
import { CreateType, GetQuery, ${pascalCase}Type, UpdateType } from './types';

export default function useApi(url: string) {
  function getAll(options?: GetQuery): Promise<${pascalCase}Type[]> {
    return client.get<${pascalCase}Type[]>(url, {
      params: options,
    });
  }
  function getOne(id: number) {
    return client.get<${pascalCase}Type>(\`\${url}/\${id}\`);
  }
  function remove(id: number) {
    return client.delete(\`\${url}/\${id}\`);
  }
  function update(data: UpdateType, options?: AxiosRequestConfig) {
    const { id, ...rest } = data;
    return client.patch(\`\${url}/\${id}\`, rest, options);
  }
  function create(data: CreateType, options?: AxiosRequestConfig) {
    return client.post(url, data, options);
  }

  return { getAll, getOne, create, update, remove };
}
EOF

echo "Successfully created '/frontend/lib/api/queries/${kebabCase}/useApi.ts'"


mkdir "./backend/src/${kebabCase}"
mkdir "./backend/src/${kebabCase}/dto"


# For Module
cat > "./backend/src/${kebabCase}/${kebabCase}.module.ts" <<EOF
import { Module } from '@nestjs/common';
import { ${pascalCase}Service } from './${kebabCase}.service';
import { ${pascalCase}Controller } from './${kebabCase}.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [${pascalCase}Service],
  controllers: [${pascalCase}Controller],
})
export class ${pascalCase}Module {}
EOF
echo "Successfully created '/backend/src/${kebabCase}/${kebabCase}.module.ts'"

# For Controller
cat > "./backend/src/${kebabCase}/${kebabCase}.controller.ts" <<EOF
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ${pascalCase} } from '@prisma/client';

import { Create${pascalCase}Dto } from './dto/create-${kebabCase}.dto';
import { Update${pascalCase}Dto } from './dto/update-${kebabCase}.dto';
import { ${pascalCase}Service } from './${kebabCase}.service';

@Controller('${kebabCase}')
export class ${pascalCase}Controller {
  constructor(private readonly ${camelCase}Service: ${pascalCase}Service) {}

  @Post()
  create(@Body() create${pascalCase}Dto: Create${pascalCase}Dto): Promise<${pascalCase}> {
    return this.${camelCase}Service.create(create${pascalCase}Dto);
  }

  @Get()
  getAll(@Query() query): Promise<${pascalCase}[]> {
    return this.${camelCase}Service.getAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<${pascalCase}> {
    return this.${camelCase}Service.getOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() update${pascalCase}Dto: Update${pascalCase}Dto,
  ): Promise<${pascalCase}> {
    return this.${camelCase}Service.update(id, update${pascalCase}Dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<${pascalCase}> {
    return this.${camelCase}Service.delete(id);
  }
}
EOF
echo "Successfully created '/backend/src/${kebabCase}/${kebabCase}.controller.ts'"

# For Service
cat > "./backend/src/${kebabCase}/${kebabCase}.service.ts" <<EOF
import { Injectable, Query } from '@nestjs/common';
import { ${pascalCase} } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Create${pascalCase}Dto } from './dto/create-${camelCase}.dto';
import { Update${pascalCase}Dto } from './dto/update-${camelCase}.dto';

@Injectable()
export class ${pascalCase}Service {
  constructor(private prismaService: PrismaService) {}

  create(create${pascalCase}Dto: Create${pascalCase}Dto): Promise<${pascalCase}> {
    return this.prismaService.${camelCase}.create({ data: create${pascalCase}Dto });
  }
  getAll(@Query() query): Promise<${pascalCase}[]> {
    return this.prismaService.${camelCase}.findMany(query);
  }
  getOne(id: number): Promise<${pascalCase}> {
    return this.prismaService.${camelCase}.findUnique({
      where: {
        id: +id,
      },
    });
  }
  update(id: number, update${pascalCase}Dto: Update${pascalCase}Dto): Promise<${pascalCase}> {
    return this.prismaService.${camelCase}.update({
      data: update${pascalCase}Dto,
      where: {
        id: +id,
      },
    });
  }
  delete(id: number): Promise<${pascalCase}> {
    return this.prismaService.${camelCase}.delete({
      where: {
        id: +id,
      },
    });
  }
}
EOF
echo "Successfully created '/backend/src/${kebabCase}/${kebabCase}.service.ts'"

# For DTO
cat > "./backend/src/${kebabCase}/dto/create-${kebabCase}.dto.ts" <<EOF
export class Create${pascalCase}Dto {
  ...contents
}
EOF
echo "Successfully created '/backend/src/${kebabCase}/dto/create-${kebabCase}.dto.ts'"

cat > "./backend/src/${kebabCase}/dto/update-${kebabCase}.dto.ts" <<EOF
export class Update${pascalCase}Dto {
  ...contents
  updatedAt?: Date | null;
}
EOF
echo "Successfully created '/backend/src/${kebabCase}/dto/upate-${kebabCase}.dto.ts'"


echo "\n${magenta}1. Set types for the api in '/backend/src/${kebabCase}/dto"
echo "2. Import the module is created to '/backend/app.module' then you're ready to call the api from backend"
echo "3. Set the types for frontend in '/frontend/lib/api/queries/${kebabCase}/types'"
echo "Then you're all ready to use CRUD of what table you created"


