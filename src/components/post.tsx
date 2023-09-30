import { BarChart2, Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface PostRootProps {
	children: ReactNode;
}

const PostRoot = (props: PostRootProps) => {
	return <li className="border-t border-t-[#2f3336]">{props.children}</li>;
};

interface PostMainPostProps {
	children: ReactNode;
	hasReply?: boolean;
}

const mainPost = tv({
	base: "px-4 pt-3 flex",
	variants: {
		hasNoReply: {
			true: "pb-3",
		},
	},
});

const PostMainPost = (props: PostMainPostProps) => {
	return (
		<div className={mainPost({ hasNoReply: !props.hasReply })}>
			<div className="mr-3 flex flex-col items-center gap-1">
				<Image
					alt="profile"
					width={40}
					height={40}
					src="https://pbs.twimg.com/profile_images/1703945358852702208/fYyo_y1S_400x400.jpg"
					className="rounded-full min-w-[2.5rem] aspect-square"
				/>
				{props.hasReply && (
					<span className="w-[2px] rounded-t-full h-full bg-[#333639]"></span>
				)}
			</div>
			<div>
				<header className="mb-[2px]">
					<span className="text-sm font-bold">
						fEyLi #QSMP #OPQ | maknae on top
					</span>
					<span className="text-sm font-normal text-muted-foreground ml-1">
						@feeeyli
					</span>
				</header>
				{props.children}
			</div>
		</div>
	);
};

interface PostStatsProps {
	reposts?: number;
	likes?: number;
	comments?: number;
	views?: number;
}

const PostStats = (props: PostStatsProps) => {
	const likes = props.likes || Math.round(Math.random() * (5000 - 500) + 500);
	const comments =
		props.comments ||
		Math.round(Math.random() * (likes * 0.1 - likes * 0.02) + likes * 0.02);
	const reposts =
		props.reposts ||
		Math.round(Math.random() * (likes / 2 - likes / 4) + likes / 4);
	const views =
		props.views ||
		Math.round(Math.random() * (likes * 2.5 - likes / 2) + likes / 2);

	return (
		<footer className="flex justify-between text-muted-foreground text-sm">
			<button className="flex items-center gap-2 group hover:text-[#1d9bf0] transition-colors">
				<div className="relative">
					<MessageCircle size="1.125rem" />
					<div className="absolute aspect-square -inset-2 group-hover:bg-[#1d9bf01a] rounded-full transition-colors bg-transparent"></div>
				</div>{" "}
				{comments}
			</button>
			<button className="flex items-center gap-2 group hover:text-[#00BA7C] transition-colors">
				<div className="relative">
					<Repeat2 size="1.125rem" />
					<div className="absolute aspect-square -inset-2 group-hover:bg-[#00BA7C1a] rounded-full transition-colors bg-transparent"></div>
				</div>{" "}
				{reposts}
			</button>
			<button className="flex items-center gap-2 group hover:text-[#F91880] transition-colors">
				<div className="relative">
					<Heart size="1.125rem" />
					<div className="absolute aspect-square -inset-2 group-hover:bg-[#F918801a] rounded-full transition-colors bg-transparent"></div>
				</div>{" "}
				{likes}
			</button>
			<button className="flex items-center gap-2 group hover:text-[#1d9bf0] transition-colors">
				<div className="relative">
					<BarChart2 size="1.125rem" />
					<div className="absolute aspect-square -inset-2 group-hover:bg-[#1d9bf01a] rounded-full transition-colors bg-transparent"></div>
				</div>{" "}
				{views}
			</button>
			<button className="group hover:text-[#1d9bf0] relative">
				<Share size="1.125rem" />
				<div className="absolute aspect-square -inset-2 group-hover:bg-[#1d9bf01a] rounded-full transition-colors bg-transparent"></div>
			</button>
		</footer>
	);
};

interface PostContentProps {
	children: ReactNode;
}

const PostContent = (props: PostContentProps) => {
	return <div className="text-sm mb-3">{props.children}</div>;
};

interface PostReplyListProps {
	children: ReactNode;
}

const PostReplyList = (props: PostReplyListProps) => {
	return <ul>{props.children}</ul>;
};

interface PostReplyProps {
	children: ReactNode;
	hasReply?: boolean;
}

const reply = tv({
	base: "px-4 flex",
	variants: {
		hasNoReply: {
			true: "pb-3",
		},
	},
});

const PostReply = (props: PostReplyProps) => {
	return (
		<li className={reply({ hasNoReply: !props.hasReply })}>
			<div className="mr-3 flex flex-col items-center gap-1">
				<span className="w-[2px] rounded-b-full h-4 bg-[#333639]"></span>
				<Image
					alt="profile"
					width={40}
					height={40}
					src="https://pbs.twimg.com/profile_images/1703945358852702208/fYyo_y1S_400x400.jpg"
					className="rounded-full min-w-[2.5rem] aspect-square"
				/>
				{props.hasReply && (
					<span className="w-[2px] rounded-t-full h-full bg-[#333639]"></span>
				)}
			</div>
			<div className="pt-3">
				<header className="mb-[2px]">
					<span className="text-sm font-bold">
						fEyLi #QSMP #OPQ | maknae on top
					</span>
					<span className="text-sm font-normal text-muted-foreground ml-1">
						@feeeyli
					</span>
				</header>
				{props.children}
			</div>
		</li>
	);
};

export const Post = {
	Root: PostRoot,
	MainPost: PostMainPost,
	Stats: PostStats,
	Content: PostContent,
	ReplyList: PostReplyList,
	Reply: PostReply,
};
