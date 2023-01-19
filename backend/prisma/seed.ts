import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

faker.locale = 'en';
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Projects
  Promise.all(
    Array(18)
      .fill(null)
      .map((_) =>
        prisma.project.create({
          data: {
            title: faker.lorem.sentence(),
            subTitle: faker.lorem.paragraph(),
            content: faker.lorem.paragraphs(),
          },
        }),
      ),
  )
    .then(() => console.info('[SEED] Succussfully create [projects] records'))
    .catch((e) =>
      console.error('[SEED] Failed to create [projects] records', e),
    );

  // Develop
  await Promise.all(
    Array(9)
      .fill(null)
      .map((_) =>
        prisma.develop.create({
          data: {
            title: faker.lorem.sentence(),
            subTitle: faker.lorem.paragraph(),
          },
        }),
      ),
  )
    .then(() => console.info('[SEED] Succussfully create [develop] records'))
    .catch((e) =>
      console.error('[SEED] Failed to create [develop] records', e),
    );

  const develops = (await prisma.develop.findMany()).map(({ id }) => id);

  Promise.all(
    Array(develops.length * 9)
      .fill(null)
      .map((_) =>
        prisma.developArticle.create({
          data: {
            title: faker.lorem.sentence(),
            subTitle: faker.lorem.paragraph(),
            content: faker.lorem.paragraphs(),
            develop: {
              connect: {
                id: develops[Math.floor(Math.random() * develops.length)],
              },
            },
          },
        }),
      ),
  )
    .then(() =>
      console.info('[SEED] Succussfully create [develop_articles] records'),
    )
    .catch((e) =>
      console.error('[SEED] Failed to create [develop_articles] records', e),
    );

  Promise.all(
    Array(18)
      .fill(null)
      .map((_) =>
        prisma.post.create({
          data: {
            title: faker.lorem.sentence(),
            subTitle: faker.lorem.paragraph(),
            content: faker.lorem.paragraphs(),
          },
        }),
      ),
  )
    .then(() => console.info('[SEED] Succussfully create [posts] records'))
    .catch((e) => console.error('[SEED] Failed to create [posts] records', e));
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
