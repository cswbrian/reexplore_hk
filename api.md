# Timetrip 

## API

| API | Link | Usage | 
|---|---|---|
| [Register](#/v1/register) | /v1/register | Reisger a new account |
| [Login](#/v1/login) | /v1/login | Reisger a new account |
| [Update profile](#/v1/updateProfile) | /v1/updateProfile | Update profile |

| [Search post](#/v1/post) | /v1/post | Search post |
| [New post](#/v1/newPost) | /v1/newPost | Post a new post |
| [Edit post](#/v1/editPost) | /v1/editPost | Edit a post |
| [Like post](#/v1/likePost) | /v1/likePost | Like a post |
| [New comment](#/v1/newComment) | /v1/newComment | Post a comment on a post |
| [Edit comment](#/v1/editComment) | /v1/editComment | Edit a comment on a post |
| [Like comment](#/v1/likeComment) | /v1/likeComment | Like a comment on a post |



### Register
**Link**

`/v1/register`

### Login
**Link**

`/v1/login`

### Update profile
**Link**

`/v1/updateProfile`


### Search posts
**Link**

`/v1/post`

### New Post

**Link**

`/v1/newPost`

### Edit Post

**Link**

`/v1/editPost`

### Like Post

**Link**

`/v1/likePost`


### New comment

**Link**
`/v1/newComment`

### Edit comment

**Link**
`/v1/editComment`

### Like comment

**Link**
`/v1/likeComment`


## Database

**Tables**

| Name | Usage |
|---|---|
| [user](#table_user) | All users   |
| [post](#table_post) | All posts  |
| [post_like](#table_post_like) | All likes of photos |
| [photo](#table_photo) | All photos  |
| [comment](#table_comment) | All comments |
| [comment_like](#table_comment_like) | All likes of comments |

### user

**SQL**

```
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `wrong_pwd_count` tinyint(4) NOT NULL DEFAULT '0',
    `locked` tinyint NOT NULL DEFAULT '0',
    `source` varchar(255) NOT NULL DEFAULT NULL,
    `last_ip` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `last_login` timestamp NULL DEFAULT NULL,
    `email_verified_at` timestamp NULL DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `user_email_unique` (`email`),
    INDEX IDX_USER_01 (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

```

### post

**SQL**

```
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `creator` int unsigned NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `type` tinyint 1 DEFAULT 1,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

```

### post_like


**SQL** 

```
DROP TABLE IF EXISTS `comment_like`;
CREATE TABLE `comment_like ` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `post_id` int unsigned NOT NULL,
    `reaction_type` tinyint NOT NULL DEFAULT 1,
    `creator` int unsigned NOT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

```

|number|reaction_type|
|----|----|
|1|like|
|2|haha|
|3|wow|
|4|good|


### photos

**SQL** 

```
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `post_id` int unsigned NOT NULL,
    `path` varchar(255) NULL DEFAULT NULL,
    `creator` int unsigned NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

```

| Field             | Type             | Null | Key | Default           | Extra          | Remark             |
|-------------------|------------------|------|-----|-------------------|----------------|--------------------|
| id                | int unsigned     | NO   | PRI | NULL              | auto_increment |
| post_id           | int unsigned     | NO   | 
| path              | varchar(255)     | NO   | 


### <a name="table_comment">comment</a>

**SQL** 

```
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `post_id` int unsigned NOT NULL,
    `path` varchar(255) NULL DEFAULT NULL,
    `creator` int unsigned NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

```

### <a name="table_comment">comment_like</a>

**SQL** 

```
DROP TABLE IF EXISTS `comment_like`;
CREATE TABLE `comment_like ` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `comment_id` int unsigned NOT NULL,
    `reaction_type` tinyint NOT NULL DEFAULT 1,
    `creator` int unsigned NOT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

```

|number|reaction_type|
|----|----|
|1|like|
|2|haha|
|3|wow|
|4|good|
