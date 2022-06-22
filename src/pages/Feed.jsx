import React, { useState } from 'react';
import {
  FeedHeader,
  FeedName,
  FeedImage,
  FeedFooter,
  CommentContainer,
  CommentName,
  CommentContent,
  CommentInput,
  CommentButton,
  SavedComment,
  FeedBox,
} from '../components/Styled';
import {
  FaUserCircle,
  FaRegHeart,
  FaRegCommentDots,
  FaRegPaperPlane,
  FaRegBookmark,
  FaRegSmile,
} from 'react-icons/fa';

import { useEffect } from 'react';
import MockupData from '../components/MockupData';

const Feed = () => {
  // * fetch 오류.. 안 불러와짐
  const datafetch = () => {
    fetch('../../public/data/Feed.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('네트워크 응답이 올바르지 않습니다.');
        }
        return response.json();
      })
      .then((data) => console.log(data));
  };

  useEffect(() => {
    datafetch();
  }, []);

  const [feeds, setFeeds] = useState(MockupData);

  return (
    <div>
      {feeds.map((fd) => (
        <FeedBox key={fd.id}>
          <FeedHeader>
            <FaUserCircle size={40} />
            <FeedName>{fd.user_id}</FeedName>
          </FeedHeader>
          <FeedImage src={fd.img} alt="test1" />
          <FeedFooter>
            <div>
              <FaRegHeart size={25} style={{ margin: 5 + 'px' }} />
              <FaRegCommentDots size={25} style={{ margin: 5 + 'px' }} />
              <FaRegPaperPlane size={25} style={{ margin: 5 + 'px' }} />
            </div>
            <FaRegBookmark size={25} style={{ margin: 5 + 'px' }} />
          </FeedFooter>
          <FeedName>좋아요 {fd.likes}개</FeedName>
          <CommentContainer>
            <SavedComment>
              <CommentName>{fd.user_id}</CommentName>
              <CommentContent>{fd.comments}</CommentContent>
            </SavedComment>
            <SavedComment>
              <FaRegSmile size={30} style={{ padding: 5 + 'px' }} />
              <form>
                <CommentInput placeholder="댓글을 입력하세요."></CommentInput>
              </form>
              <CommentButton type="submit">등록</CommentButton>
            </SavedComment>
          </CommentContainer>
        </FeedBox>
      ))}
    </div>
  );
};

export default Feed;
