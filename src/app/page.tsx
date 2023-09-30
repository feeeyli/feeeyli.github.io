import { Post } from "@/components/post";
import { POSTS } from "@/data/posts";
import { Link2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<div className="max-w-[37rem] border-x border-x-[#2f3336]">
				<header>
					<div className="relative">
						<Image
							alt="banner"
							src="https://pbs.twimg.com/profile_banners/1503016829379399685/1695048922/1500x500"
							width={1500}
							height={500}
							className="aspect-[1500/500] w-[37rem]"
						/>
						<div className="absolute left-4 bottom-0 border-4 border-background inline-block rounded-full translate-y-1/2">
							<Image
								alt="profile"
								src="https://pbs.twimg.com/profile_images/1703945358852702208/fYyo_y1S_400x400.jpg"
								width={400}
								height={400}
								className="rounded-full aspect-square w-32"
							/>
						</div>
					</div>
					<div className="mt-20 px-4 mb-4">
						<div className="mt-1 mb-3">
							<h1 className="text-xl font-black">
								fEyLi #QSMP #OPQ | maknae on top
							</h1>
							<span className="text-muted-foreground text-sm">
								@feeeyli
							</span>
						</div>
						<p className="text-sm mb-3">
							eu sou o feyli👍|| info jobs = dono do facebook ||
							criador do MultiQSMP || stay, amante de rpg, futura
							atora, escritore e dev
						</p>
						<div className="text-sm mb-3 flex flex-wrap gap-3 text-muted-foreground">
							<span className="flex items-center gap-1">
								<MapPin size="1rem" /> ele/elu/ela
							</span>
							<span className="flex items-center gap-1">
								<Link2 size="1rem" />
								<Link
									href="twitter.com/feeeyli"
									className="text-primary"
								>
									twitter.com/feeeyli
								</Link>
							</span>
						</div>
					</div>
				</header>
				<ul>
					{POSTS.map((post) => (
						<Post.Root key={post.id}>
							<Post.MainPost hasReply={!!post.reply_list}>
								<Post.Content>{post.content}</Post.Content>
								<Post.Stats
									likes={post.likes}
									comments={post.comments}
								/>
							</Post.MainPost>
							<Post.ReplyList>
								{post.reply_list?.map((reply, index) => (
									<Post.Reply
										key={reply.id}
										hasReply={
											!!post.reply_list?.[index + 1]
										}
									>
										<Post.Content>
											{reply.content}
										</Post.Content>
										<Post.Stats
											likes={reply.likes}
											comments={reply.comments}
										/>
									</Post.Reply>
								))}
							</Post.ReplyList>
						</Post.Root>
					))}
				</ul>
			</div>
		</main>
	);
}
