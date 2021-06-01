import React from "react";
import styled from "styled-components";
import { RiTwitterFill } from "react-icons/ri";
import { RiHome7Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import { RiMoreFill } from "react-icons/ri";
const LeftSide = () => {
  return (
    <Container>
      <Logo>
        <RiTwitterFill />
      </Logo>
      <Home>
        <RiHome7Fill />
        <span>Home</span>
      </Home>
      <Hash>
        <BiHash />
        <span>Explore</span>
      </Hash>

      <Bell>
        <BiBell />
        <span>Notifications</span>
      </Bell>
      <Messages>
        <HiOutlineMail />
        <span>Messages</span>
      </Messages>
      <Books>
        <FiBookmark />
        <span>BookMarks</span>
      </Books>
      <Lists>
        <RiFileList2Line />
        <span>Lists</span>
      </Lists>
      <Profile>
        <HiOutlineUser />
        <span>Profile</span>
      </Profile>
      <More>
        <CgMoreO />
        <span>More</span>
      </More>
      <Button>Tweet</Button>

      <Avatar>
        <BiUserCircle />
        <span>
          Ali<p>@Ali07492390</p>
        </span>
        <div className="morefill">
          <RiMoreFill />
        </div>
      </Avatar>
    </Container>
  );
};

export default LeftSide;

const Container = styled.div`
  position: relative;
  font-family: "14px -apple-system,BlinkMacSystemFont," Segoe UI
    ",Roboto,Helvetica,Arial,sans-serif";
  padding-left: 4rem;
  padding-bottom: 2rem;
  border-right: 1px solid lightgray;
  padding-right: 40px;
`;
const Logo = styled(RiTwitterFill)`
  margin-top: 2px;
  color: rgba(29, 161, 242, 1);
  font-size: 40px;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  padding: 5px;
  :hover {
    background-color: #cef6f5;

    border-radius: 50%;
  }
`;

const Home = styled.div`
  color: rgba(29, 161, 242, 1);
  font-size: 25px;
  display: flex;

  padding: 10px;
  & span {
    color: rgba(29, 161, 242, 1);
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: #cef6f5;
    border-radius: 25px;
  }
`;
const Hash = styled.div`
  font-size: 25px;
  color: #000;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 10px;

  & span {
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
  }
  &:hover {
    color: rgba(29, 161, 242, 2);
    background-color: #cef6f5;
    border-radius: 25px;
  }
`;
const Bell = styled.div`
  font-size: 25px;
  color: #000;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 10px;
  & span {
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
  }

  &:hover {
    color: rgba(29, 161, 242, 2);
    background-color: #cef6f5;
    border-radius: 25px;
  }
`;
const Messages = styled.div`
  font-size: 25px;
  color: #000;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 10px;
  & span {
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
  }
  &:hover {
    color: rgba(29, 161, 242, 2);
    background-color: #cef6f5;
    border-radius: 25px;
  }
`;
const Books = styled.div`
  font-size: 25px;
  color: #000;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 10px;
  & span {
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
  }
  &:hover {
    color: rgba(29, 161, 242, 2);
    background-color: #cef6f5;
    border-radius: 25px;
  }
`;
const Lists = styled.div`
  font-size: 25px;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 10px;
  & span {
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
  }
  &:hover {
    color: rgba(29, 161, 242, 2);
    background-color: #cef6f5;
    border-radius: 25px;
  }
`;
const Profile = styled.div`
  font-size: 25px;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 10px;
  & span {
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
  }

  &:hover {
    background-color: #cef6f5;
    border-radius: 25px;
    color: rgba(29, 161, 242, 1);
  }
`;
const More = styled.div`
  font-size: 25px;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 10px;
  & span {
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
  }

  &:hover {
    background-color: #cef6f5;
    border-radius: 25px;
    color: rgba(29, 161, 242, 1);
  }
`;

const Button = styled.button`
  margin-top: 5px;
  color: #ffff;
  padding-left: 85px;
  padding-right: 80px;
  letter-spacing: 2px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  background-color: rgba(29, 161, 242, 0.8);
  border: none;
  cursor: pointer;

  :hover {
    background-color: rgba(29, 161, 242, 2);
  }
`;

const Avatar = styled.div`
  font-size: 50px;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  padding: 10px;
  & span {
    position: sticky;
    font-size: 15px;
    font-weight: 600;
    display: flex;
  }
  & span > p {
    font-size: 15px;
    color: #848484;
    padding-left: -4px;
    display: flex;
    flex-direction: column;
  }
  & div {
    font-size: 20px;
    display: flex;
    padding-left: 10px;
  }
`;
