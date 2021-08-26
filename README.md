
## hcagricakir
# Create Database

```
CREATE DATABASE userdb
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Turkish_Turkey.1254'
    LC_CTYPE = 'Turkish_Turkey.1254'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```

# Create Table
```
CREATE TABLE public.userdb
(
    id integer NOT NULL,
    isim character varying(20) COLLATE pg_catalog."default",
    lokasyon character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT "userDB_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.userdb
    OWNER to postgres;
```
