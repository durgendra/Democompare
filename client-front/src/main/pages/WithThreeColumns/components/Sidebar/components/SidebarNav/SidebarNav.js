import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, Routes, Route } from 'react-router-dom';
import AddFAQ from '../../../../../../components/evaluateOption/EvaluateOption';
import AddOption from '../../../../../../components/findOptions/FindOptions';

const SidebarNav = () => {
  const [selectedLink, setSelectedLink] = useState('');
  const mock = useMemo(
    () => [
      // {
      //   groupTitle: 'Create FAQ or Quiz',
      //   id: 'faq',
      //   pages: [
      //     {
      //       title: 'Create using text',
      //       href: '',
      //       link: '/faq',
      //       component: <AddFAQ {...{ setSelectedLink, link: '' }} />,
      //       icon: (
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="none"
      //           width={24}
      //           height={24}
      //           viewBox="0 0 24 24"
      //           stroke="currentColor"
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             strokeWidth={2}
      //             d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      //           />
      //         </svg>
      //       ),
      //     },
      //     {
      //       title: 'Create using document',
      //       href: '',
      //       link: '/faq/doc',
      //       component: <AddFAQDoc {...{ setSelectedLink, link: '/faq/doc' }} />,
      //       icon: (
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="none"
      //           width={24}
      //           height={24}
      //           viewBox="0 0 24 24"
      //           stroke="currentColor"
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             strokeWidth={2}
      //             d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      //           />
      //         </svg>
      //       ),
      //     },
      //     {
      //       title: 'Create using url',
      //       href: '',
      //       link: '/faq/url',
      //       component: <AddFAQURL {...{ setSelectedLink, link: '/faq/url' }} />,
      //       icon: (
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="none"
      //           width={24}
      //           height={24}
      //           viewBox="0 0 24 24"
      //           stroke="currentColor"
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             strokeWidth={2}
      //             d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      //           />
      //         </svg>
      //       ),
      //     },
      //     // {
      //     //   title: 'FAQ list',
      //     //   href: '#',
      //     //   link: 'chats',
      //     //   component: <Chats {...{ setSelectedLink, link: 'chats' }} />,
      //     //   icon: (
      //     //     <svg
      //     //       xmlns="http://www.w3.org/2000/svg"
      //     //       fill="none"
      //     //       width={24}
      //     //       height={24}
      //     //       viewBox="0 0 24 24"
      //     //       stroke="currentColor"
      //     //     >
      //     //       <path
      //     //         strokeLinecap="round"
      //     //         strokeLinejoin="round"
      //     //         strokeWidth={2}
      //     //         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      //     //       />
      //     //     </svg>
      //     //   ),
      //     // },
      //   ],
      // },
      {
        groupTitle: 'Explore your Options',
        id: 'options',
        pages: [
          {
            title: 'Evaluate my options',
            href: '',
            link: '/option',
            component: <AddFAQ {...{ setSelectedLink, link: '' }} />,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            ),
          },
          {
            title: 'Find options',
            href: '#',
            link: '/option/find',
            component: (
              <AddOption {...{ setSelectedLink, link: '/option/find' }} />
            ),
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            ),
          },
          // {
          //   title: 'Chat with document',
          //   href: '#',
          //   link: '/faq/chat',
          //   component: <ChatDocs {...{ setSelectedLink, link: '/faq/chat' }} />,
          //   icon: (
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       width={24}
          //       height={24}
          //       viewBox="0 0 24 24"
          //       stroke="currentColor"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         strokeWidth={2}
          //         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          //       />
          //     </svg>
          //   ),
          // },
          // {
          //   title: 'FAQ list',
          //   href: '#',
          //   link: 'chats',
          //   component: <Chats {...{ setSelectedLink, link: 'chats' }} />,
          //   icon: (
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       width={24}
          //       height={24}
          //       viewBox="0 0 24 24"
          //       stroke="currentColor"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         strokeWidth={2}
          //         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          //       />
          //     </svg>
          //   ),
          // },
        ],
      },
    ],
    [],
  );

  const navigate = useNavigate();

  return (
    <Box padding={2}>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={3}>
          <Typography
            variant="caption"
            color={'text.secondary'}
            sx={{
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: 1,
              display: 'block',
            }}
          >
            {item.groupTitle}
          </Typography>
          <Box>
            {item.pages.map((p, i) => (
              <Box marginBottom={1 / 2} key={i}>
                <Button
                  component={'a'}
                  // href={p.href}
                  onClick={() => navigate(p.link)}
                  selected={selectedLink === p.link}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color: 'text.primary',
                  }}
                  startIcon={p.icon || null}
                >
                  {p.title}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SidebarNav;
