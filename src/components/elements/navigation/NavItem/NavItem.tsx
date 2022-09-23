import { Box, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FC, useEffect, useState } from 'react';
import { ISubNav } from '../SubNav/SubNav';
import { SubNav } from '../SubNav';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FC<ISubNav> = ({ label, children, href }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.400');
  const linkActiveColor = useColorModeValue('gray.800', 'white');
  const router = useRouter();
  const isCurrentPath = router.asPath === href || (href !== '/' && router.pathname.startsWith(href || ''));
  const [params, setParams] = useState('');

  useEffect(() => {
    if (
      router.query.address !== undefined
      && router.query.address != null
      && router.query.chain !== undefined
      && router.query.chain != null) {
      setParams(`?address=${router.query.address}&chain=${router.query.chain}`);
    }
  }, [router.query]);

  if (href?.indexOf('?') === -1) {
    href += params;
  }

  return (
    <Popover trigger={'hover'} placement={'bottom-start'}>
      <PopoverTrigger>
        <Box>
          <Box
            fontSize={15}
            fontWeight={500}
            color={isCurrentPath ? linkActiveColor : linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkActiveColor,
            }}
            cursor="pointer"
          >
            {children ? (
              <>
                {label} <ChevronDownIcon />
              </>
            ) : (
              <NextLink href={href || '/'}>
                <Link
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              </NextLink>
            )}
          </Box>
        </Box>
      </PopoverTrigger>

      {children && (
        <PopoverContent border={0} boxShadow={'xl'} p={4} rounded={'xl'} minW={'sm'}>
          <Stack>
            {children.map((child) => {
              if (child.href?.indexOf('?') === -1) {
                child.href += params;
              }

              return <SubNav key={child.label} {...child} />
            })}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default NavItem;

