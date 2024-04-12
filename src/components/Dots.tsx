import PropTypes from 'prop-types'
import React, { Fragment, forwardRef, useMemo } from "react";
import { css } from '@emotion/css'

type DotsProps = {
    col?: number
    row?: number
    rotate?: number;
    margin?: number;
    color?: string;
    size?: number;
    item?: JSX.Element | null;
    style?: React.CSSProperties
    onItemClick?: (i: number, j: number) => void
}

function DotsComp(
    {
        col = 3,
        row = 3,
        size = 20,
        rotate = 0,
        margin = 5,
        color = "#bbb",
        item = null,
        style = {},
        onItemClick = () => {},
        ...props
    }   : DotsProps,
    ref : React.ForwardedRef<any>
) {

    function makeArray(w: number, h: number, val: JSX.Element | null): JSX.Element[][] {

        const localStyle = css`
            height: ${size}px;
            width: ${size}px;
            margin: ${margin}px;
            border-radius: 50%;
            background-color: ${item === null && color};
            display: inline-block;
        `

        let arr: JSX.Element[][] = [];

        for (let i = 0; i < h; i++) {
            arr[i] = [];
            for (let j = 0; j < w; j++) {
                arr[i][j] = (
                    <div 
                        className={localStyle}
                        style={{ ...style }}
                        onClick={() => onItemClick(i, j)}
                    >
                        {val}
                    </div>
                )
            }
        }

        return arr;
    }

    const displayArr = useMemo(() => {
        return makeArray(row, col, item)
        .map((v, i) =>
            <Fragment key={i}>
                {v.map((k, j) =>
                    <Fragment key={`${i}-${j}`}>
                        {k}
                    </Fragment>
                )}
                <br />
            </Fragment>
        )
    },[col, row, size, rotate, margin, color, item, style])

    return (
        <div
            ref={ref}
            className={
                css`
                    width: ${(size + margin * 2) * row};
                    height: ${(size + margin * 2) * col};
                    transform: rotate(${rotate}deg)
                `
            }
            {...props}
        >
            { displayArr }
        </div>
    )
}

DotsComp.PropTypes = {
    col: PropTypes.number,
    row: PropTypes.number,
    rotate: PropTypes.number,
    margin: PropTypes.number,
    color: PropTypes.number,
    size: PropTypes.number,
    item: PropTypes.element,
    style: PropTypes.object,
    onItemClick: PropTypes.func
}

export const Dots = forwardRef(DotsComp)