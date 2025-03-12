export type Comment = {
  id: number;
  image: string;
  href: string;
  special?: boolean;
};

export const comments: Comment[] = [
  {
    id: 1,
    image: '/comments/1.png',
    href: 'https://x.com/itsAlfakir/status/1892154654143742429'
  },
  {
    id: 2,
    image: '/comments/2.png',
    href: 'https://x.com/samm_duc/status/1892485537765671392'
  },
  {
    id: 4,
    image: '/comments/4.png',
    href: 'https://x.com/youngchingjui/status/1895718069030568229',
    special: true
  },
  {
    id: 5,
    image: '/comments/5.png',
    href: 'https://x.com/rama_vats/status/1896437243423973832'
  },
  {
    id: 6,
    image: '/comments/6.png',
    href: 'https://x.com/youngchingjui/status/1896464169026867394'
  },
  {
    id: 10,
    image: '/comments/10.jpeg',
    href: 'https://peerlist.io/samitkapoor/project/stackbits?commentId=CHA9NJQ7JKKN8JP3AGNN8KKRKR7P',
    special: true
  },
  {
    id: 3,
    image: '/comments/3.png',
    href: 'https://x.com/PaulTheLi/status/1894057598774571215'
  },
  {
    id: 12,
    image: '/comments/12.png',
    href: 'https://peerlist.io/scroll/post/ACTH6AJMAB66DD66BFGBQLNJEED86K?commentId=CHBABKA6AE9AP9PIPMJNDAG6MAKR',
    special: true
  },
  {
    id: 11,
    image: '/comments/11.png',
    href: 'https://peerlist.io/scroll/post/ACTH6AJMAB66DD66BFGBQLNJEED86K?commentId=CHLKNDKMDBQLMRN2PKGA8NDDJ8DP'
  },
  {
    id: 7,
    image: '/comments/7.png',
    href: 'https://x.com/rama_vats/status/1898604814734438837'
  },
  {
    id: 9,
    image: '/comments/9.png',
    href: 'https://x.com/AdnanSparrow1/status/1898750545600393401',
    special: true
  },
  {
    id: 8,
    image: '/comments/8.png',
    href: 'https://x.com/SujanGoud12/status/1898620593102352556'
  }
];
