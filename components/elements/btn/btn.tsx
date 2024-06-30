import { Button } from '@mui/material';
import React from 'react'
import '../elements/element.css'
import { BtnType } from './btn.type';
import '../../../globals.css';

export default function btn({ title, colorTitle, bgColor, disableColor, error, click, fontSize }: BtnType) {
  return (
    <div>
      <Button
        className={error ? (disableColor && fontSize && colorTitle) :
          bgColor ? (bgColor && fontSize && colorTitle) :
            "defaultBgColor whiteFontColor fontSize"}
        disabled={error ? true : false}
        onClick={() => click}
      >
        {title}
      </Button>
    </div>
  )
}
