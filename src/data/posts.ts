export type ReplyType = {
	id: number;
	content: string;
	reposts?: number;
	likes?: number;
	comments?: number;
	views?: number;
};

export type PostType = {
	id: number;
	content: string;
	likes?: number;
	reposts?: number;
	comments?: number;
	views?: number;
	reply_list?: ReplyType[];
}[];

export const POSTS: PostType = [
	{
		id: 1,
		content:
			"Post 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos amet magnam aperiam.",
	},
	{
		id: 2,
		content:
			"Post 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos amet magnam aperiam.",
	},
	{
		id: 3,
		content:
			"Post 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos amet magnam aperiam.",

		reply_list: [
			{
				id: 1,
				content:
					"Reply 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos amet magnam aperiam.",
			},
			{
				id: 2,
				content:
					"Reply 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos amet magnam aperiam.",
			},
			{
				id: 3,
				content:
					"Reply 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos amet magnam aperiam.",
			},
		],
	},
	{
		id: 4,
		content:
			"Post 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos amet magnam aperiam.",
	},
];
