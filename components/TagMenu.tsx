import IconWithText from './common/IconWithText';
import TagBox from './common/TagBox';
import CaretRight from '@/public/icons/CaretRight';

interface TagMenuProps {
  tags: string[];
}

export default function TagMenu({ tags }: TagMenuProps) {
  return (
    <details className="flex [&_svg]:open:rotate-90 [&_svg]:open:transition [&_svg]:open:duration-300 [&_svg]:open:ease-in-out">
      <summary className="w-fit list-none">
        <IconWithText
          Icon={CaretRight}
          iconSize={16}
          text="Tags"
          className="cursor-pointer flex-row-reverse rounded-lg border p-1.5 pr-2 text-lg"
        />
      </summary>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagBox key={tag} tag={tag} />
        ))}
      </div>
    </details>
  );
}
