import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    animation: shake 5s cubic-bezier(0.36, 0.07, 0.19, 0.97);

    @keyframes shake {
      0% {
        transform: rotate(0);
      }
      6% {
        transform: rotate(-20deg);
      }
      10% {
        transform: rotate(20deg);
      }
      16% {
        transform: rotate(-10deg);
      }
      20% {
        transform: rotate(10deg);
      }
      33% {
        transform: rotate(0);
      }
      39% {
        transform: rotate(20deg);
      }
      43% {
        transform: rotate(-20deg);
      }
      49% {
        transform: rotate(10deg);
      }
      52% {
        transform: rotate(-10deg);
      }
      66% {
        transform: rotate(0);
      }
      72% {
        transform: rotate(-20deg);
      }
      76% {
        transform: rotate(20deg);
      }
      82% {
        transform: rotate(-10deg);
      }
      86% {
        transform: rotate(10deg);
      }
      100% {
        transform: rotate(0);
      }
    }
  }
`;

const Logo = () => {
  const logoImg = `/images/pokeball.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox className="animate-cursor">
          <Image src={logoImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            maryantocinn
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
