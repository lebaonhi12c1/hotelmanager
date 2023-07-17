import React, { memo } from 'react';
import CardListRoomOfRoomType from './CardListRoomOfRoomType';
import { check_empty } from '@/hooks';
const ListRoomOfRoomType = memo(( { value } ) => {
    return (
        <div>
            {
                check_empty( value ) ?
                (
                    <div className="border-2 p-4 rounded-lg bg-white text-red-color text-center text-[24px] italic">
                        Loại phòng này hiện tại chưa có phòng tồn tại
                    </div>
                ) :
                (
                    value?.map(
                        item =>
                        {
                            return (
                                <CardListRoomOfRoomType
                                    value = {
                                        item
                                    }
                                    key={ item._id }
                                />
                            )
                        }
                    )
                )
            }
        </div>
    );
});
ListRoomOfRoomType.displayName = 'ListRoomOfRoomType'
export default ListRoomOfRoomType;