'use client';

import { useState } from 'react';
import IconWithText from './common/IconWithText';
import TagBox from './common/TagBox';
import CaretRight from '@/public/icons/CaretRight';

interface TagMenuProps {
  tags: string[];
}

export default function TagMenu({ tags }: TagMenuProps) {
  const [tagOpen, isTagOpen] = useState(false);

  return (
    <>
      <div className="flex">
        <div onClick={() => isTagOpen(!tagOpen)}>
          <IconWithText
            Icon={CaretRight}
            iconSize={16}
            text="Tags"
            className="cursor-pointer rounded-lg border p-1.5 pr-2 text-lg"
          />
        </div>
      </div>
      <div className={`mb-3 ${tagOpen ? 'block' : 'hidden'}`}>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagBox key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </>
  );
}
