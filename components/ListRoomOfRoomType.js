import React, { memo } from 'react';
import CardListRoomOfRoomType from './CardListRoomOfRoomType';
const ListRoomOfRoomType = memo(( { value } ) => {
    return (
        <div>
            {
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
            }
        </div>
    );
});
ListRoomOfRoomType.displayName = 'ListRoomOfRoomType'
export default ListRoomOfRoomType;