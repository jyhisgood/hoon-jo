import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  text: string;
};

const Markdown = ({ text }: Props) => {
  const customSyntex: any = {
    h2: ({ node, ...props }: any) => (
      <h2
        {...props}
        className="text-xl md:text-3xl xl:text-4xl mt-[40px] mb-[5px] font-semibold"
      />
    ),
    p: ({ node, ...props }: any) => (
      <p
        {...props}
        className="pl-[4px] text-sm md:text-[16px] leading-[155%]"
      />
    ),
    ul: ({ node, ...props }: any) => (
      <ul
        {...props}
        className="text-sm md:text-[16px] list-disc px-[30px] mt-[10px]"
      />
    ),
    li: ({ node, ...props }: any) => (
      <li {...props} className="mb-[4px] md:mb-[7px]" />
    ),
  };
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={customSyntex}>
      {text}
    </ReactMarkdown>
  );
};

export default Markdown;