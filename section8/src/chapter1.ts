/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    // 추가하거나 수정해도 인덱스드 엑세스 타입으로 인해 자동으로 즉시반영
  };
}

// 배열과 함께 사용
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// const key = "author"; key는 들어갈수없다.

// 중첩 대괄호도 가능하다. ["author"]["id"]
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

function printAuthorInfo2(author: PostList[0]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 27,
  },
};

const postlist: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 27,
  },
};

printAuthorInfo(post.author);

// 튜플과 함께 사용
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];
type TupNum = Tup[number];
