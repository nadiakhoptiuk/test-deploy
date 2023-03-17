import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import css from './MansoryGallery.module.css';
import { convertImage, toBase64 } from 'utils/blur';
export const MasonryGallery = ({ itemData }) => {
  return (
    <ImageList
      variant="masonry"
      cols={2}
      style={{
        columnGap: '60px',
        marginBottom: '-160px',
      }}
    >
      {itemData.map(item => {
        return (
          <ImageListItem key={item.url} className="group pb-[160px] ">
            <Image
              className="h-auto w-full "
              src={item.url}
              alt={item.alt}
              width={item.width}
              height={item.height}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                convertImage(item.width, item.height),
              )}`}
            />
            <div
              className={`absolute left-0 top-0 bottom-[100px] z-10 w-full opacity-0 hover:opacity-[.15] ${css.overlay}`}
            ></div>
            <p className="absolute left-6 top-11 z-20 text-[28px] font-black leading-[34px] text-white opacity-0 group-hover:opacity-100">
              {item.title}
            </p>
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};