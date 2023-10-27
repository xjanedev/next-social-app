"use client";

import useMe from "@/hooks/me";
import { ProfileUser } from "@/model/user";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { PulseLoader } from "react-spinners";
import ToggleButton from "./ui/ToggleButton";

interface Props {
  user: ProfileUser;
}
export default function FollowBtn({ user }: Props) {
  const { username } = user;
  const { user: loggedInUser, toggleFollow } = useMe();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isUpdating = isPending || isFetching;

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find(item => item.username === username);

  const text = following ? "Unfollow" : "Follow";

  const handleFollow = async () => {
    setIsFetching(true);
    await toggleFollow(user.id, !following);
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
      // 클라이언트에서 리프레시가 발생하고 서버로부터 바뀐 데이터를 받아올것이다.
      // 호출해도 이미 렌더링된 메모리는 그대로 유지되고 브라우저 히스토리도 변경 되지 않고
      // 하위 컴포넌트까지 업데이트가 될 것이지만 클라이언트에서 필요한 메모리, 변수들은 전혀 영향을 받지 않는다.
      // 이미 ssr로 처리된 프리렌더링 된 페이지가 있는데 트리상의 필요한 부분만 쏙 업데이트 해주는 것이다.
      // 새로운 usetransition 을 사용하면 라우터가 리프레시 되는 동안 의미있는 로딩 스피너를 보여줄 수 있다.
      // 작업이 끝날때까지 의미있는 로딩 스피너를 보여준다.
    });
  };

  return (
    <>
      {showButton && (
        <div className='relative'>
          {isUpdating && (
            <div className='absolute z-20 inset-0 flex justify-center items-center'>
              <PulseLoader size={6} />
            </div>
          )}
          <ToggleButton
            disabled={isUpdating}
            text={text}
            onClick={handleFollow}
            gray={text === "Unfollow"}
          />
        </div>
      )}
    </>
  );
}
