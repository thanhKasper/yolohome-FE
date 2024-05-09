# Introduction

YoloHome is a web application that will manipulate any hardwares that are connected to the YoloHome system. It can control any devices as well as display the information of the sensor. It also create a graph for the owner of the system to analyse their usual habit such as whether they drink enough water or not.

This is the frontend of YoloHome system, in order to find for the backend you can go to the link:

# Team member
|Name               |Role  | 
|-------------------|------|
|Nguyễn Phúc Toàn   |Design and implement the hardware part |
|Kiều Tiến Thành    |Design UI and implement the frontend      |
|Nguyễn Phước Thịnh |Design and implement the hardware part|
|Lý Trần Phước Trí  |Design and implement the backend      |
|Nguyễn Minh Triết  |Review, testing and writing report      |

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# What I have learned?

- Create a new branch in git if you want to make a huge change in the code (you don't want to ctrl + Z)
- useEffect should only be used when getting out of React scope
- useEffect can have prop as a dependency (BIGGEST things that i just have known).
- return in useEffect is marvelous for setInterval function
