// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

/**
 * A function component for inlining SVG code for animation logo loader
 */
function LoadingAnimation() {
    return (
        <svg
            width='104'
            height='104'
            viewBox='0 0 104 104'
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <linearGradient
                    id='LoadingAnimation__spinner-gradient'
                    x1='0%'
                    y1='72px'
                    x2='0%'
                    y2='32px'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop
                        offset='0'
                        className='LoadingAnimation__spinner-gradient-color'
                        stopOpacity='1'
                    />
                    <stop
                        offset='1'
                        className='LoadingAnimation__spinner-gradient-color'
                        stopOpacity='0'
                    />
                </linearGradient>
                <mask id='LoadingAnimation__base-wipe-mask'>
                    <rect
                        x='0'
                        y='0'
                        width='104'
                        height='104'
                        fill='white'
                    />
                    <g className='LoadingAnimation__compass-base-mask-container'>
                        <circle
                            className='LoadingAnimation__compass-base-mask'
                            r='27'
                            cx='52'
                            cy='52'
                            fill='white'
                            stroke='black'
                            strokeWidth='54'
                        />
                    </g>
                </mask>
                <mask id='LoadingAnimation__base-mask'>
                    <rect
                        x='0'
                        y='0'
                        width='104'
                        height='104'
                        fill='white'
                    />
                    <circle
                        r='37'
                        cx='54'
                        cy='46'
                        fill='black'
                    />
                    <g className='LoadingAnimation__compass-needle-behind-mask'>
                        <g transform='translate(54,46)'>
                            <g transform='translate(-29, -61.3)'>
                                <path
                                    d='M38.5984 0C45.476 1.07762 51.9794 3.28918 57.9108 6.43722V61.1566C57.9108 77.1373 44.9364 90.1119 28.9554 90.1119C12.9744 90.1119 0 77.1373 0 61.1566C0 55.3848 1.69443 50.0063 4.60763 45.4861L38.5984 0Z'
                                    fill='black'
                                />
                            </g>
                        </g>
                    </g>
                    <g className='LoadingAnimation__compass-needle-front-mask'>
                        <g transform='translate(54,46)'>
                            <g transform='translate(-29,-61.3)'>
                                <path
                                    d='M38.5984 0C45.476 1.07762 51.9794 3.28918 57.9108 6.43722V61.1566C57.9108 77.1373 44.9364 90.1119 28.9554 90.1119C12.9744 90.1119 0 77.1373 0 61.1566C0 55.3848 1.69443 50.0063 4.60763 45.4861L38.5984 0Z'
                                    fill='black'
                                />
                            </g>
                        </g>
                    </g>
                </mask>
                <mask id='LoadingAnimation__spinner-left-half-mask'>
                    <rect
                        x='0'
                        y='0'
                        width='52'
                        height='104'
                        fill='white'
                    />
                    <circle
                        className='LoadingAnimation__spinner-mask'
                        r='20'
                        cx='52'
                        cy='52'
                        fill='black'
                    />
                </mask>
                <mask id='LoadingAnimation__spinner-right-half-mask'>
                    <rect
                        x='52'
                        y='0'
                        width='52'
                        height='104'
                        fill='white'
                    />
                    <circle
                        className='LoadingAnimation__spinner-mask'
                        r='20'
                        cx='52'
                        cy='52'
                        fill='black'
                    />
                </mask>
            </defs>
            <g
                className='LoadingAnimation__spinner-container'
            >
                <g className='LoadingAnimation__spinner'>
                    <circle
                        r='25'
                        cx='52'
                        cy='52'
                        fill='#004EB6'
                        mask='url(#LoadingAnimation__spinner-left-half-mask)'
                    />
                    <circle
                        r='25'
                        cx='52'
                        cy='52'
                        fill='url(#LoadingAnimation__spinner-gradient)'
                        mask='url(#LoadingAnimation__spinner-right-half-mask)'
                    />
                </g>
            </g>
            <g className='LoadingAnimation__compass'>
                <g
                    className='LoadingAnimation__compass-base-container'
                    mask='url(#LoadingAnimation__base-wipe-mask)'
                />
                <g className='LoadingAnimation__compass-needle-container'>
                    <g className='LoadingAnimation__compass-needle'>
                        <g transform='scale(0.3)'>
                            <g transform='translate(-100,-100)'>
                                <path
                                    d='M0 0 C1.95988459 2.93982688 2.74447414 5.14824714 3.75 8.5 C9.48649275 25.87575341 21.66248689 39.84286189 34 53 C35.19388667 54.36945824 36.38192374 55.74405071 37.5625 57.125 C40.80110719 60.85892359 44.28732432 64.30376738 47.8046875 67.7734375 C50.44340944 70.44972132 52.88421502 73.26018451 55.328125 76.11328125 C56.94204468 77.93459716 58.62497231 79.62267968 60.375 81.3125 C64.10208339 84.98147741 67.34523859 88.980476 70.61328125 93.05859375 C72.20178519 95.01627537 73.82457398 96.9466369 75.48046875 98.84765625 C92.10093642 117.99340428 100.79605749 138.4647479 99 164 C96.18337744 188.0914163 83.45333112 209.98877561 64.984375 225.5390625 C62.04667241 227.79130115 59.06161033 229.92010168 56 232 C54.8553125 232.81210937 54.8553125 232.81210937 53.6875 233.640625 C33.28268792 247.10213297 6.45411919 250.68978226 -17.30078125 246.81640625 C-43.33210243 241.07137338 -65.96106258 226.94935531 -80.83203125 204.55078125 C-93.41952845 184.35751132 -99.47784749 161.40836755 -95.6015625 137.54736328 C-94.55530988 133.14404815 -92.91876399 129.08691641 -91 125 C-90.34837891 123.58654297 -90.34837891 123.58654297 -89.68359375 122.14453125 C-78.84681591 100.74884167 -60.66894438 83.22782493 -44.4375 65.9375 C-42.53107656 63.90442688 -40.62519753 61.87084895 -38.72021484 59.83642578 C-37.65908511 58.7036103 -36.59709301 57.57160106 -35.53369141 56.44091797 C-19.74291058 39.61562887 -6.77422445 22.25029819 0 0 Z '
                                    fill='#0045B5'
                                    transform='translate(137,14)'
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default LoadingAnimation;
