/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBoardInput = {
  id?: string | null,
  name: string,
  owner: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelBoardConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBoardConditionInput | null > | null,
  or?: Array< ModelBoardConditionInput | null > | null,
  not?: ModelBoardConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Board = {
  __typename: "Board",
  id: string,
  name: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
  posts?: ModelPostConnection | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  content?: string | null,
  status: StatusEnum,
  owner: string,
  createdAt: string,
  updatedAt: string,
  boardID: string,
  board?: Board | null,
};

export enum StatusEnum {
  ready = "ready",
  doing = "doing",
  done = "done",
  onHold = "onHold",
  cancelled = "cancelled",
}


export type UpdateBoardInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteBoardInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  status: StatusEnum,
  owner: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  boardID: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStatusEnumInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  boardID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStatusEnumInput = {
  eq?: StatusEnum | null,
  ne?: StatusEnum | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  status?: StatusEnum | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  boardID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
};

export type ModelBoardConnection = {
  __typename: "ModelBoardConnection",
  items:  Array<Board >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStatusEnumInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  boardID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  content?: SearchableStringFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  boardID?: SearchableIDFilterInput | null,
  and?: Array< SearchablePostFilterInput | null > | null,
  or?: Array< SearchablePostFilterInput | null > | null,
  not?: SearchablePostFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePostSortableFields {
  id = "id",
  title = "title",
  content = "content",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  boardID = "boardID",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchablePostConnection = {
  __typename: "SearchablePostConnection",
  items:  Array<Post >,
  nextToken?: string | null,
  total?: number | null,
};

export type CreateBoardMutationVariables = {
  input: CreateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type CreateBoardMutation = {
  createBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        status: StatusEnum,
        owner: string,
        createdAt: string,
        updatedAt: string,
        boardID: string,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateBoardMutationVariables = {
  input: UpdateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type UpdateBoardMutation = {
  updateBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        status: StatusEnum,
        owner: string,
        createdAt: string,
        updatedAt: string,
        boardID: string,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteBoardMutationVariables = {
  input: DeleteBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type DeleteBoardMutation = {
  deleteBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        status: StatusEnum,
        owner: string,
        createdAt: string,
        updatedAt: string,
        boardID: string,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    status: StatusEnum,
    owner: string,
    createdAt: string,
    updatedAt: string,
    boardID: string,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    status: StatusEnum,
    owner: string,
    createdAt: string,
    updatedAt: string,
    boardID: string,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    status: StatusEnum,
    owner: string,
    createdAt: string,
    updatedAt: string,
    boardID: string,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetBoardQueryVariables = {
  id: string,
};

export type GetBoardQuery = {
  getBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        status: StatusEnum,
        owner: string,
        createdAt: string,
        updatedAt: string,
        boardID: string,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsQuery = {
  listBoards?:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type ListBoardsByOwnerQueryVariables = {
  owner?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsByOwnerQuery = {
  listBoardsByOwner?:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    status: StatusEnum,
    owner: string,
    createdAt: string,
    updatedAt: string,
    boardID: string,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      status: StatusEnum,
      owner: string,
      createdAt: string,
      updatedAt: string,
      boardID: string,
      board?:  {
        __typename: "Board",
        id: string,
        name: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsByBoardQueryVariables = {
  boardID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsByBoardQuery = {
  listPostsByBoard?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      status: StatusEnum,
      owner: string,
      createdAt: string,
      updatedAt: string,
      boardID: string,
      board?:  {
        __typename: "Board",
        id: string,
        name: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsByOwnerQueryVariables = {
  owner?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsByOwnerQuery = {
  listPostsByOwner?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      status: StatusEnum,
      owner: string,
      createdAt: string,
      updatedAt: string,
      boardID: string,
      board?:  {
        __typename: "Board",
        id: string,
        name: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type SearchPostsQueryVariables = {
  filter?: SearchablePostFilterInput | null,
  sort?: SearchablePostSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchPostsQuery = {
  searchPosts?:  {
    __typename: "SearchablePostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      status: StatusEnum,
      owner: string,
      createdAt: string,
      updatedAt: string,
      boardID: string,
      board?:  {
        __typename: "Board",
        id: string,
        name: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } >,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type OnCreateBoardSubscription = {
  onCreateBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        status: StatusEnum,
        owner: string,
        createdAt: string,
        updatedAt: string,
        boardID: string,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateBoardSubscription = {
  onUpdateBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        status: StatusEnum,
        owner: string,
        createdAt: string,
        updatedAt: string,
        boardID: string,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteBoardSubscription = {
  onDeleteBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        status: StatusEnum,
        owner: string,
        createdAt: string,
        updatedAt: string,
        boardID: string,
      } >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    status: StatusEnum,
    owner: string,
    createdAt: string,
    updatedAt: string,
    boardID: string,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    status: StatusEnum,
    owner: string,
    createdAt: string,
    updatedAt: string,
    boardID: string,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    status: StatusEnum,
    owner: string,
    createdAt: string,
    updatedAt: string,
    boardID: string,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};
