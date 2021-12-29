<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. -->

# Live demo: [https://kaitomusic.cf](https://kaitomusic.cf)

## API

#### `URL`: <https://api-kaito-music.herokuapp.com>

## Params default: `_limit=20&_page=1`

### `Get Trending` (`method: GET`): "URL/music/trending?`Params`"

### `Get Favorite` (`method: GET`): "URL/music/favorite?`Params`"

### `Get all` (`method: GET`): "URL/music/get-all?`Params`"

## Play list music

### `Create` (`method: POST`): "URL/list-music/create"

    - Body: { "idMusic": ?, "nameList: ? }
    - Authorization: Bearer  `token`

### `Update` (`method: PUT`): "URL/list-music/update-name-list-music"

    - Body: { "nameList": ?, "_id: ? }
    - Authorization: Bearer  `token`

### `Delete` (`method: PUT`): "URL/list-music/delete-list-music"

    -   params: { "_id": ? }
    -   Authorization: Bearer `token`

### `Get all list music` (`method: GET`): "URL/list-music/get-list?`Params`"

    - Authorization: Bearer  `token`

### `Get list music` (`method: GET`): "URL/list-music/get-by-id"

    - params: { "_id": ? }
    - Authorization: Bearer `token`

## Music

### `Get music` (`method: GET`): "URL/music/get-by-id"

    - params: { "_id": ? }

## Play history

### `Create` (`method: POST`): "URL/play-history/create"

     - Body: { "idMusic": ? }
     - Authorization: Bearer `token`

### `Get music play history` (`method: GET`): "URL/play-history/get-by-token?`Params`"

     - Authorization: Bearer `token`

## Comment

### `Create` (`method: POST`): "URL/comment/get-by-id-music"

     - Body: { "content": ?, "id_music": ? }
     - Authorization: Bearer `token`

### `History comment music` (`method: GET`): "URL/get-list-comment-authorization-token?`Params`"

     - Authorization: Bearer `token`

### `Reply comment music` (`method: POST`): "URL/comment/get-by-id-music"

     - Body: { "content": ?, "id_music": ? ,id_reply: id comment reply}
     - Authorization: Bearer `token`

### `Delete` (`method: DELETE`): "URL/comment/get-by-id-music"

     - params: { "_id": ?}
     - Authorization: Bearer `token`

### `Update` (`method: PUT`): "URL/update-comment-by-id"

     - body: {  "content": ? ,"_id": ?}
     - Authorization: Bearer `token`

### `Get comment music` (`method: GET`): "URL/comment/get-by-id-music"

    - params: { "_id": ?, _limit: ?, _page: ? }

## favorite

### `Create` (`method: POST`): "URL/favorite/create"

    - Body: { "idMusic": ? }
    - Authorization: Bearer `token`

### `Get music favorite` (`method: GET`): "URL/favorite/get-authorization-token?`Params`"

    - Authorization: Bearer `token`

### `Delete` (`method: DELETE`): "URL/delete-by-id"

    - params: { "_id": ? }
    - Authorization: Bearer `token`

## Account

### `Register` (`method: POST`):"URL/account"

    - Body: { "userName": ? , "password": ? , "email": ?}

### `login` (`method: POST`): "URL/login"

    - Body: { "email": ? ,"password": ? }

### `Profile` (`method: GET`): "URL/profile"

    - Authorization: Bearer `token`
