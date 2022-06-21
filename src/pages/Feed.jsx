import React from 'react';
import {
  FeedHeader,
  FeedName,
  FeedImage,
  FeedFooter,
} from '../components/Styled';
import {
  FaUserCircle,
  FaRegHeart,
  FaRegCommentDots,
  FaRegPaperPlane,
  FaRegBookmark,
} from 'react-icons/fa';

const Feed = () => {
  return (
    <div>
      <FeedHeader>
        <FaUserCircle size={40} />
        <FeedName>name</FeedName>
      </FeedHeader>
      <FeedImage src="https://source.unsplash.com/random/900x500" alt="test1" />
      <FeedFooter>
        <div>
          <FaRegHeart size={25} style={{ margin: 5 + 'px' }} />
          <FaRegCommentDots size={25} style={{ margin: 5 + 'px' }} />
          <FaRegPaperPlane size={25} style={{ margin: 5 + 'px' }} />
        </div>
        <FaRegBookmark size={25} style={{ margin: 5 + 'px' }} />
      </FeedFooter>
      <FeedName>좋아요 0개</FeedName>
    </div>
  );
};

export default Feed;
