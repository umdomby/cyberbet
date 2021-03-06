toc.dat                                                                                             0000600 0004000 0002000 00000115627 14162101240 0014442 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           8                y            dabbr5qukq3ulp     13.5 (Ubuntu 13.5-2.pgdg20.04+1)     14.1 (Ubuntu 14.1-2.pgdg20.04+1) z    W           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         X           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         Y           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         Z           1262    24307414    dabbr5qukq3ulp    DATABASE     c   CREATE DATABASE dabbr5qukq3ulp WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE dabbr5qukq3ulp;
                strphjhvqamiyv    false         [           0    0    DATABASE dabbr5qukq3ulp    ACL     A   REVOKE CONNECT,TEMPORARY ON DATABASE dabbr5qukq3ulp FROM PUBLIC;
                   strphjhvqamiyv    false    4186         \           0    0    dabbr5qukq3ulp    DATABASE PROPERTIES     A   ALTER DATABASE dabbr5qukq3ulp SET "TimeZone" TO 'Europe/Moscow';
                     strphjhvqamiyv    false         ]           0    0    LANGUAGE plpgsql    ACL     1   GRANT ALL ON LANGUAGE plpgsql TO strphjhvqamiyv;
                   postgres    false    719                     3079    25691156    tsm_system_rows 	   EXTENSION     C   CREATE EXTENSION IF NOT EXISTS tsm_system_rows WITH SCHEMA public;
     DROP EXTENSION tsm_system_rows;
                   false         ^           0    0    EXTENSION tsm_system_rows    COMMENT     f   COMMENT ON EXTENSION tsm_system_rows IS 'TABLESAMPLE method which accepts number of rows as a limit';
                        false    2         ?            1259    27270088    basket_devices    TABLE     ?   CREATE TABLE public.basket_devices (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "basketId" integer,
    "deviceId" integer
);
 "   DROP TABLE public.basket_devices;
       public         heap    strphjhvqamiyv    false         ?            1259    27270091    basket_devices_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.basket_devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.basket_devices_id_seq;
       public          strphjhvqamiyv    false    201         _           0    0    basket_devices_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.basket_devices_id_seq OWNED BY public.basket_devices.id;
          public          strphjhvqamiyv    false    202         ?            1259    27270093    baskets    TABLE     ?   CREATE TABLE public.baskets (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);
    DROP TABLE public.baskets;
       public         heap    strphjhvqamiyv    false         ?            1259    27270096    baskets_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.baskets_id_seq;
       public          strphjhvqamiyv    false    203         `           0    0    baskets_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;
          public          strphjhvqamiyv    false    204         ?            1259    27270098    brands    TABLE     j  CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    idname integer,
    amount integer,
    brand_payment integer DEFAULT 0 NOT NULL,
    brand_description character varying(255) DEFAULT ''::character varying
);
    DROP TABLE public.brands;
       public         heap    strphjhvqamiyv    false         ?            1259    27270106    brands_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.brands_id_seq;
       public          strphjhvqamiyv    false    205         a           0    0    brands_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;
          public          strphjhvqamiyv    false    206         ?            1259    27997777    chats    TABLE       CREATE TABLE public.chats (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    message character varying(255) NOT NULL,
    date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.chats;
       public         heap    strphjhvqamiyv    false         ?            1259    27997775    chats_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.chats_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.chats_id_seq;
       public          strphjhvqamiyv    false    228         b           0    0    chats_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.chats_id_seq OWNED BY public.chats.id;
          public          strphjhvqamiyv    false    227         ?            1259    27270108    device_infos    TABLE       CREATE TABLE public.device_infos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deviceId" integer
);
     DROP TABLE public.device_infos;
       public         heap    strphjhvqamiyv    false         ?            1259    27270114    device_infos_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.device_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.device_infos_id_seq;
       public          strphjhvqamiyv    false    207         c           0    0    device_infos_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.device_infos_id_seq OWNED BY public.device_infos.id;
          public          strphjhvqamiyv    false    208         ?            1259    27270116    devices    TABLE     q  CREATE TABLE public.devices (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "userdatumId" integer,
    "typeId" integer,
    "brandId" integer,
    dev_start boolean DEFAULT false NOT NULL,
    dev_username character varying(255) DEFAULT ''::character varying,
    dev_typename character varying(255) DEFAULT ''::character varying,
    dev_brandname character varying(255) DEFAULT ''::character varying,
    dev_billid character varying(255) DEFAULT ''::character varying,
    dev_amount integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.devices;
       public         heap    strphjhvqamiyv    false         ?            1259    27270128    devices_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.devices_id_seq;
       public          strphjhvqamiyv    false    209         d           0    0    devices_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.devices_id_seq OWNED BY public.devices.id;
          public          strphjhvqamiyv    false    210         ?            1259    27270130    donates    TABLE       CREATE TABLE public.donates (
    id integer NOT NULL,
    amount integer NOT NULL,
    username character varying(255) NOT NULL,
    "billId" character varying(255) NOT NULL,
    comment character varying(255),
    status boolean DEFAULT false NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    nametype text,
    code_transaction integer,
    "brandName" character varying(50) DEFAULT 'JC'::character varying,
    brandid integer,
    typeid integer
);
    DROP TABLE public.donates;
       public         heap    strphjhvqamiyv    false         ?            1259    27270138    donates_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.donates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.donates_id_seq;
       public          strphjhvqamiyv    false    211         e           0    0    donates_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.donates_id_seq OWNED BY public.donates.id;
          public          strphjhvqamiyv    false    212         ?            1259    27996878    one_on_ones    TABLE       CREATE TABLE public.one_on_ones (
    id integer NOT NULL,
    start_status boolean DEFAULT false,
    username character varying(255) NOT NULL,
    oppname character varying(255) DEFAULT ''::character varying,
    game character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    amount integer NOT NULL,
    "time" integer NOT NULL,
    "userCheck" boolean DEFAULT false,
    "oppCheck" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.one_on_ones;
       public         heap    strphjhvqamiyv    false         ?            1259    27996876    one_on_ones_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.one_on_ones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.one_on_ones_id_seq;
       public          strphjhvqamiyv    false    226         f           0    0    one_on_ones_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.one_on_ones_id_seq OWNED BY public.one_on_ones.id;
          public          strphjhvqamiyv    false    225         ?            1259    27270142    rating_maps    TABLE     ]  CREATE TABLE public.rating_maps (
    id integer NOT NULL,
    rating_username character varying(255) NOT NULL,
    rating_type character varying(255) NOT NULL,
    rating_brand character varying(255) NOT NULL,
    rating_rate integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.rating_maps;
       public         heap    strphjhvqamiyv    false         ?            1259    27270148    rating_maps_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.rating_maps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.rating_maps_id_seq;
       public          strphjhvqamiyv    false    213         g           0    0    rating_maps_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.rating_maps_id_seq OWNED BY public.rating_maps.id;
          public          strphjhvqamiyv    false    214         ?            1259    27270150    ratings    TABLE     Y  CREATE TABLE public.ratings (
    id integer NOT NULL,
    rating_username character varying(255) NOT NULL,
    rating_type character varying(255) NOT NULL,
    rating_brand character varying(255) NOT NULL,
    rating_rate integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.ratings;
       public         heap    strphjhvqamiyv    false         ?            1259    27270156    ratings_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.ratings_id_seq;
       public          strphjhvqamiyv    false    215         h           0    0    ratings_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;
          public          strphjhvqamiyv    false    216         ?            1259    27270158    type_brands    TABLE     ?   CREATE TABLE public.type_brands (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "typeId" integer,
    "brandId" integer
);
    DROP TABLE public.type_brands;
       public         heap    strphjhvqamiyv    false         ?            1259    27270161    type_brands_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.type_brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.type_brands_id_seq;
       public          strphjhvqamiyv    false    217         i           0    0    type_brands_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.type_brands_id_seq OWNED BY public.type_brands.id;
          public          strphjhvqamiyv    false    218         ?            1259    27270163    types    TABLE     ?  CREATE TABLE public.types (
    id integer NOT NULL,
    name timestamp with time zone,
    nametype character varying(255) NOT NULL,
    start boolean,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    amount integer,
    fund integer DEFAULT 0,
    grandprix boolean DEFAULT false NOT NULL,
    winner integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.types;
       public         heap    strphjhvqamiyv    false         ?            1259    27270172    types_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.types_id_seq;
       public          strphjhvqamiyv    false    219         j           0    0    types_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;
          public          strphjhvqamiyv    false    220         ?            1259    27270174    userdata    TABLE     ?  CREATE TABLE public.userdata (
    id integer NOT NULL,
    username character varying(255),
    rating integer DEFAULT 0 NOT NULL,
    twitch character varying(255) NOT NULL,
    facebook character varying(255),
    instagram character varying(255),
    telegram character varying(255),
    vk character varying(255),
    ok character varying(255),
    img character varying(255),
    promo character varying(255),
    bet integer DEFAULT 1000,
    ban boolean DEFAULT false,
    ipreg character varying(255),
    ip character varying(255),
    ipin text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    youtube character varying(255) DEFAULT 'https://www.youtube.com/'::character varying,
    user_fund integer DEFAULT 0 NOT NULL,
    "countWin" integer DEFAULT 0 NOT NULL,
    "countLoss" integer DEFAULT 0 NOT NULL,
    "promoCount" integer DEFAULT 0 NOT NULL,
    "dCyberbet" integer DEFAULT 0 NOT NULL,
    "dTypes" integer DEFAULT 0 NOT NULL,
    "dUsers" integer DEFAULT 0 NOT NULL,
    "pGame" integer DEFAULT 0 NOT NULL,
    "pFund" integer DEFAULT 0 NOT NULL,
    game integer DEFAULT 0 NOT NULL,
    ratingcy integer DEFAULT 0 NOT NULL,
    ratingcymap integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.userdata;
       public         heap    strphjhvqamiyv    false         ?            1259    27270196    userdata_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.userdata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.userdata_id_seq;
       public          strphjhvqamiyv    false    221         k           0    0    userdata_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.userdata_id_seq OWNED BY public.userdata.id;
          public          strphjhvqamiyv    false    222         ?            1259    27270198    users    TABLE     '  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    strphjhvqamiyv    false         ?            1259    27270205    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          strphjhvqamiyv    false    223         l           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          strphjhvqamiyv    false    224         X           2604    27270207    basket_devices id    DEFAULT     v   ALTER TABLE ONLY public.basket_devices ALTER COLUMN id SET DEFAULT nextval('public.basket_devices_id_seq'::regclass);
 @   ALTER TABLE public.basket_devices ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    202    201         Y           2604    27270208 
   baskets id    DEFAULT     h   ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);
 9   ALTER TABLE public.baskets ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    204    203         \           2604    27270209 	   brands id    DEFAULT     f   ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);
 8   ALTER TABLE public.brands ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    206    205         ?           2604    27997780    chats id    DEFAULT     d   ALTER TABLE ONLY public.chats ALTER COLUMN id SET DEFAULT nextval('public.chats_id_seq'::regclass);
 7   ALTER TABLE public.chats ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    227    228    228         ]           2604    27270210    device_infos id    DEFAULT     r   ALTER TABLE ONLY public.device_infos ALTER COLUMN id SET DEFAULT nextval('public.device_infos_id_seq'::regclass);
 >   ALTER TABLE public.device_infos ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    208    207         d           2604    27270211 
   devices id    DEFAULT     h   ALTER TABLE ONLY public.devices ALTER COLUMN id SET DEFAULT nextval('public.devices_id_seq'::regclass);
 9   ALTER TABLE public.devices ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    210    209         g           2604    27270212 
   donates id    DEFAULT     h   ALTER TABLE ONLY public.donates ALTER COLUMN id SET DEFAULT nextval('public.donates_id_seq'::regclass);
 9   ALTER TABLE public.donates ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    212    211         ?           2604    27996881    one_on_ones id    DEFAULT     p   ALTER TABLE ONLY public.one_on_ones ALTER COLUMN id SET DEFAULT nextval('public.one_on_ones_id_seq'::regclass);
 =   ALTER TABLE public.one_on_ones ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    225    226    226         h           2604    27270213    rating_maps id    DEFAULT     p   ALTER TABLE ONLY public.rating_maps ALTER COLUMN id SET DEFAULT nextval('public.rating_maps_id_seq'::regclass);
 =   ALTER TABLE public.rating_maps ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    214    213         i           2604    27270214 
   ratings id    DEFAULT     h   ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);
 9   ALTER TABLE public.ratings ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    216    215         j           2604    27270215    type_brands id    DEFAULT     p   ALTER TABLE ONLY public.type_brands ALTER COLUMN id SET DEFAULT nextval('public.type_brands_id_seq'::regclass);
 =   ALTER TABLE public.type_brands ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    218    217         n           2604    27270216    types id    DEFAULT     d   ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);
 7   ALTER TABLE public.types ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    220    219                    2604    27270217    userdata id    DEFAULT     j   ALTER TABLE ONLY public.userdata ALTER COLUMN id SET DEFAULT nextval('public.userdata_id_seq'::regclass);
 :   ALTER TABLE public.userdata ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    222    221         ?           2604    27270218    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    224    223         9          0    27270088    basket_devices 
   TABLE DATA           ^   COPY public.basket_devices (id, "createdAt", "updatedAt", "basketId", "deviceId") FROM stdin;
    public          strphjhvqamiyv    false    201       4153.dat ;          0    27270093    baskets 
   TABLE DATA           I   COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM stdin;
    public          strphjhvqamiyv    false    203       4155.dat =          0    27270098    brands 
   TABLE DATA           v   COPY public.brands (id, name, "createdAt", "updatedAt", idname, amount, brand_payment, brand_description) FROM stdin;
    public          strphjhvqamiyv    false    205       4157.dat T          0    27997777    chats 
   TABLE DATA           V   COPY public.chats (id, username, message, date, "createdAt", "updatedAt") FROM stdin;
    public          strphjhvqamiyv    false    228       4180.dat ?          0    27270108    device_infos 
   TABLE DATA           d   COPY public.device_infos (id, title, description, "createdAt", "updatedAt", "deviceId") FROM stdin;
    public          strphjhvqamiyv    false    207       4159.dat A          0    27270116    devices 
   TABLE DATA           ?   COPY public.devices (id, "createdAt", "updatedAt", "userId", "userdatumId", "typeId", "brandId", dev_start, dev_username, dev_typename, dev_brandname, dev_billid, dev_amount) FROM stdin;
    public          strphjhvqamiyv    false    209       4161.dat C          0    27270130    donates 
   TABLE DATA           ?   COPY public.donates (id, amount, username, "billId", comment, status, "createdAt", "updatedAt", nametype, code_transaction, "brandName", brandid, typeid) FROM stdin;
    public          strphjhvqamiyv    false    211       4163.dat R          0    27996878    one_on_ones 
   TABLE DATA           ?   COPY public.one_on_ones (id, start_status, username, oppname, game, description, amount, "time", "userCheck", "oppCheck", "createdAt", "updatedAt") FROM stdin;
    public          strphjhvqamiyv    false    226       4178.dat E          0    27270142    rating_maps 
   TABLE DATA           |   COPY public.rating_maps (id, rating_username, rating_type, rating_brand, rating_rate, "createdAt", "updatedAt") FROM stdin;
    public          strphjhvqamiyv    false    213       4165.dat G          0    27270150    ratings 
   TABLE DATA           x   COPY public.ratings (id, rating_username, rating_type, rating_brand, rating_rate, "createdAt", "updatedAt") FROM stdin;
    public          strphjhvqamiyv    false    215       4167.dat I          0    27270158    type_brands 
   TABLE DATA           X   COPY public.type_brands (id, "createdAt", "updatedAt", "typeId", "brandId") FROM stdin;
    public          strphjhvqamiyv    false    217       4169.dat K          0    27270163    types 
   TABLE DATA           ?   COPY public.types (id, name, nametype, start, description, "createdAt", "updatedAt", amount, fund, grandprix, winner) FROM stdin;
    public          strphjhvqamiyv    false    219       4171.dat M          0    27270174    userdata 
   TABLE DATA           =  COPY public.userdata (id, username, rating, twitch, facebook, instagram, telegram, vk, ok, img, promo, bet, ban, ipreg, ip, ipin, "createdAt", "updatedAt", "userId", youtube, user_fund, "countWin", "countLoss", "promoCount", "dCyberbet", "dTypes", "dUsers", "pGame", "pFund", game, ratingcy, ratingcymap) FROM stdin;
    public          strphjhvqamiyv    false    221       4173.dat O          0    27270198    users 
   TABLE DATA           T   COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          strphjhvqamiyv    false    223       4175.dat m           0    0    basket_devices_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.basket_devices_id_seq', 1, false);
          public          strphjhvqamiyv    false    202         n           0    0    baskets_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.baskets_id_seq', 1, false);
          public          strphjhvqamiyv    false    204         o           0    0    brands_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.brands_id_seq', 44, true);
          public          strphjhvqamiyv    false    206         p           0    0    chats_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.chats_id_seq', 170, true);
          public          strphjhvqamiyv    false    227         q           0    0    device_infos_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.device_infos_id_seq', 1, false);
          public          strphjhvqamiyv    false    208         r           0    0    devices_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.devices_id_seq', 232, true);
          public          strphjhvqamiyv    false    210         s           0    0    donates_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.donates_id_seq', 335, true);
          public          strphjhvqamiyv    false    212         t           0    0    one_on_ones_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.one_on_ones_id_seq', 21, true);
          public          strphjhvqamiyv    false    225         u           0    0    rating_maps_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.rating_maps_id_seq', 11, true);
          public          strphjhvqamiyv    false    214         v           0    0    ratings_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.ratings_id_seq', 33, true);
          public          strphjhvqamiyv    false    216         w           0    0    type_brands_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.type_brands_id_seq', 1, false);
          public          strphjhvqamiyv    false    218         x           0    0    types_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.types_id_seq', 14, true);
          public          strphjhvqamiyv    false    220         y           0    0    userdata_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.userdata_id_seq', 51, true);
          public          strphjhvqamiyv    false    222         z           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 49, true);
          public          strphjhvqamiyv    false    224         ?           2606    27270224 "   basket_devices basket_devices_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT basket_devices_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.basket_devices DROP CONSTRAINT basket_devices_pkey;
       public            strphjhvqamiyv    false    201         ?           2606    27270226    baskets baskets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.baskets DROP CONSTRAINT baskets_pkey;
       public            strphjhvqamiyv    false    203         ?           2606    27270228    brands brands_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_pkey;
       public            strphjhvqamiyv    false    205         ?           2606    27997785    chats chats_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.chats DROP CONSTRAINT chats_pkey;
       public            strphjhvqamiyv    false    228         ?           2606    27270230    device_infos device_infos_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT device_infos_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.device_infos DROP CONSTRAINT device_infos_pkey;
       public            strphjhvqamiyv    false    207         ?           2606    27270232    devices devices_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.devices DROP CONSTRAINT devices_pkey;
       public            strphjhvqamiyv    false    209         ?           2606    27270234    donates donates_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.donates
    ADD CONSTRAINT donates_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.donates DROP CONSTRAINT donates_pkey;
       public            strphjhvqamiyv    false    211         ?           2606    27996890    one_on_ones one_on_ones_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.one_on_ones
    ADD CONSTRAINT one_on_ones_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.one_on_ones DROP CONSTRAINT one_on_ones_pkey;
       public            strphjhvqamiyv    false    226         ?           2606    27270236    rating_maps rating_maps_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.rating_maps
    ADD CONSTRAINT rating_maps_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.rating_maps DROP CONSTRAINT rating_maps_pkey;
       public            strphjhvqamiyv    false    213         ?           2606    27270238    ratings ratings_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.ratings DROP CONSTRAINT ratings_pkey;
       public            strphjhvqamiyv    false    215         ?           2606    27270240    type_brands type_brands_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT type_brands_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT type_brands_pkey;
       public            strphjhvqamiyv    false    217         ?           2606    27270242 *   type_brands type_brands_typeId_brandId_key 
   CONSTRAINT     v   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_brandId_key" UNIQUE ("typeId", "brandId");
 V   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT "type_brands_typeId_brandId_key";
       public            strphjhvqamiyv    false    217    217         ?           2606    27270244    types types_nametype_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_nametype_key UNIQUE (nametype);
 B   ALTER TABLE ONLY public.types DROP CONSTRAINT types_nametype_key;
       public            strphjhvqamiyv    false    219         ?           2606    27270246    types types_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.types DROP CONSTRAINT types_pkey;
       public            strphjhvqamiyv    false    219         ?           2606    27270248    userdata userdata_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.userdata DROP CONSTRAINT userdata_pkey;
       public            strphjhvqamiyv    false    221         ?           2606    27270250    userdata userdata_username_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_username_key UNIQUE (username);
 H   ALTER TABLE ONLY public.userdata DROP CONSTRAINT userdata_username_key;
       public            strphjhvqamiyv    false    221         ?           2606    27270252    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            strphjhvqamiyv    false    223         ?           2606    27270254    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            strphjhvqamiyv    false    223         ?           2606    27270255 +   basket_devices basket_devices_basketId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;
 W   ALTER TABLE ONLY public.basket_devices DROP CONSTRAINT "basket_devices_basketId_fkey";
       public          strphjhvqamiyv    false    201    203    3979         ?           2606    27270260 +   basket_devices basket_devices_deviceId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;
 W   ALTER TABLE ONLY public.basket_devices DROP CONSTRAINT "basket_devices_deviceId_fkey";
       public          strphjhvqamiyv    false    201    209    3985         ?           2606    27270265    baskets baskets_userId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.baskets DROP CONSTRAINT "baskets_userId_fkey";
       public          strphjhvqamiyv    false    223    203    4007         ?           2606    27270270 '   device_infos device_infos_deviceId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT "device_infos_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;
 S   ALTER TABLE ONLY public.device_infos DROP CONSTRAINT "device_infos_deviceId_fkey";
       public          strphjhvqamiyv    false    207    3985    209         ?           2606    27270275    devices devices_brandId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public.devices DROP CONSTRAINT "devices_brandId_fkey";
       public          strphjhvqamiyv    false    3981    205    209         ?           2606    27270280    devices devices_typeId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.devices DROP CONSTRAINT "devices_typeId_fkey";
       public          strphjhvqamiyv    false    209    219    3999         ?           2606    27270285    devices devices_userId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.devices DROP CONSTRAINT "devices_userId_fkey";
       public          strphjhvqamiyv    false    209    4007    223         ?           2606    27270290     devices devices_userdatumId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_userdatumId_fkey" FOREIGN KEY ("userdatumId") REFERENCES public.userdata(id) ON UPDATE CASCADE ON DELETE SET NULL;
 L   ALTER TABLE ONLY public.devices DROP CONSTRAINT "devices_userdatumId_fkey";
       public          strphjhvqamiyv    false    221    4001    209         ?           2606    27270295 $   type_brands type_brands_brandId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT "type_brands_brandId_fkey";
       public          strphjhvqamiyv    false    3981    217    205         ?           2606    27270300 #   type_brands type_brands_typeId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT "type_brands_typeId_fkey";
       public          strphjhvqamiyv    false    3999    217    219         ?           2606    27270305    userdata userdata_userId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT "userdata_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public.userdata DROP CONSTRAINT "userdata_userId_fkey";
       public          strphjhvqamiyv    false    223    4007    221                                                                                                                 4153.dat                                                                                            0000600 0004000 0002000 00000000005 14162101240 0014230 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           4155.dat                                                                                            0000600 0004000 0002000 00000000005 14162101241 0014233 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           4157.dat                                                                                            0000600 0004000 0002000 00000002013 14162101241 0014236 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        36	mt_Jebus	2021-09-16 01:24:10.166+03	2021-09-16 01:24:10.166+03	10	0	0	16 8 2 : ???? 117
38	6lm10a	2021-09-16 01:27:22.084+03	2021-09-16 01:27:22.084+03	10	0	0	16 8 1:15 : ???? 115
39	spider	2021-09-16 01:27:34.285+03	2021-09-16 01:27:34.285+03	10	0	0	16 8 1:15 : ???? 115
40	mini-Nosta	2021-09-16 01:28:28.831+03	2021-09-16 01:28:28.831+03	10	0	0	16 8 1:15 : ???? 123
42	Jebus Cross	2021-09-28 13:02:27.888+03	2021-09-28 13:02:27.888+03	12	0	0	16 8 2 : ???? 116
43	Jebus Outcast	2021-09-28 13:04:49.792+03	2021-09-28 13:04:49.792+03	12	0	0	16 8 2 : ???? 116
37	Jebus Outcast	2021-09-16 01:27:04.263+03	2021-09-16 01:27:04.263+03	11	0	0	16 8 2 : ???? 116
20	h3dm1	2021-08-02 00:08:10.646+03	2021-08-02 00:08:10.646+03	10	0	0	16 8 1:15 : ???? 115
29	2sm4d(3)	2021-09-16 00:35:44.459+03	2021-09-16 00:35:44.459+03	10	0	0	16 6 1 : ???? 115
41	Jebus Cross	2021-09-16 01:28:47.254+03	2021-09-16 01:28:47.254+03	11	0	200	16 8 2 : ???? 116
15	Jebus Cross	2021-07-30 04:35:00.728+03	2021-07-30 04:35:00.728+03	10	10	0	16 8 2 : ???? 116
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     4180.dat                                                                                            0000600 0004000 0002000 00000041275 14162101241 0014247 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Denis22	123	2021-10-18 13:13:28.325+03	2021-10-18 13:13:28.328+03	2021-10-18 13:13:28.328+03
2	Denis22	333	2021-10-18 13:14:23.435+03	2021-10-18 13:14:23.436+03	2021-10-18 13:14:23.436+03
3	Denis22	dwaddd	2021-10-18 13:18:38.47+03	2021-10-18 13:18:38.47+03	2021-10-18 13:18:38.47+03
4	Denis22	333333	2021-10-18 13:20:24.227+03	2021-10-18 13:20:24.23+03	2021-10-18 13:20:24.23+03
5	Denis22	dadd111	2021-10-18 13:26:09.439+03	2021-10-18 13:26:09.44+03	2021-10-18 13:26:09.44+03
6	Denis22	111	2021-10-18 13:26:18.031+03	2021-10-18 13:26:18.032+03	2021-10-18 13:26:18.032+03
7	Denis22	33311112222	2021-10-18 13:27:00.597+03	2021-10-18 13:27:00.598+03	2021-10-18 13:27:00.598+03
8	Denis22	5555	2021-10-18 13:34:33.906+03	2021-10-18 13:34:33.909+03	2021-10-18 13:34:33.909+03
9	Denis22	123123	2021-10-18 13:34:41.685+03	2021-10-18 13:34:41.686+03	2021-10-18 13:34:41.686+03
10	Denis22	2131	2021-10-18 13:37:08.551+03	2021-10-18 13:37:08.552+03	2021-10-18 13:37:08.552+03
11	Denis22	dawd	2021-10-18 13:39:43.327+03	2021-10-18 13:39:43.328+03	2021-10-18 13:39:43.328+03
12	Denis22	lhjlu	2021-10-18 20:12:50.889+03	2021-10-18 20:12:50.89+03	2021-10-18 20:12:50.89+03
13	Denis22		2021-10-18 20:12:59.777+03	2021-10-18 20:12:59.778+03	2021-10-18 20:12:59.778+03
14	Denis22	[[	2021-10-18 20:13:02.657+03	2021-10-18 20:13:02.657+03	2021-10-18 20:13:02.657+03
15	Denis22	jjj	2021-10-18 20:46:01.008+03	2021-10-18 20:46:01.009+03	2021-10-18 20:46:01.009+03
16	Denis22	22	2021-10-19 04:08:08.803+03	2021-10-19 04:08:08.811+03	2021-10-19 04:08:08.811+03
17	Denis22	224	2021-10-19 04:08:14.534+03	2021-10-19 04:08:14.535+03	2021-10-19 04:08:14.535+03
18	Denis22	ddd	2021-10-20 06:35:45.123+03	2021-10-20 06:35:45.126+03	2021-10-20 06:35:45.126+03
19	Denis22	????	2021-10-20 07:25:33.821+03	2021-10-20 07:25:33.83+03	2021-10-20 07:25:33.83+03
20	Denis22	44	2021-10-20 07:53:05.213+03	2021-10-20 07:53:05.281+03	2021-10-20 07:53:05.281+03
21	umdomby	JC 12 7 2	2021-10-20 08:43:39.065+03	2021-10-20 08:43:39.135+03	2021-10-20 08:43:39.135+03
22	Denis22	uigiuiu	2021-10-23 15:00:19.778+03	2021-10-23 15:00:19.845+03	2021-10-23 15:00:19.845+03
23	user	0	2021-10-28 10:39:08.911+03	2021-10-28 10:39:08.913+03	2021-10-28 10:39:08.913+03
24	user	0	2021-10-28 10:39:45.525+03	2021-10-28 10:39:45.527+03	2021-10-28 10:39:45.527+03
25	user	123	2021-10-28 10:47:34.156+03	2021-10-28 10:47:34.14+03	2021-10-28 10:47:34.14+03
26	user	0	2021-10-28 10:55:27.728+03	2021-10-28 10:55:27.732+03	2021-10-28 10:55:27.732+03
27	user	123	2021-10-28 10:58:33.757+03	2021-10-28 10:58:33.745+03	2021-10-28 10:58:33.745+03
28	user	123	2021-10-28 10:58:35.162+03	2021-10-28 10:58:35.168+03	2021-10-28 10:58:35.168+03
29	user	123	2021-10-28 10:58:36.133+03	2021-10-28 10:58:36.138+03	2021-10-28 10:58:36.138+03
30	user	123	2021-10-28 10:58:37.04+03	2021-10-28 10:58:37.037+03	2021-10-28 10:58:37.037+03
31	user	123	2021-10-28 10:58:38.263+03	2021-10-28 10:58:38.26+03	2021-10-28 10:58:38.26+03
32	user	123	2021-10-28 10:58:39.221+03	2021-10-28 10:58:39.217+03	2021-10-28 10:58:39.217+03
33	user	123	2021-10-28 10:58:40.192+03	2021-10-28 10:58:40.187+03	2021-10-28 10:58:40.187+03
34	user	123	2021-10-28 10:58:41.666+03	2021-10-28 10:58:41.652+03	2021-10-28 10:58:41.652+03
35	user	123	2021-10-28 10:58:42.892+03	2021-10-28 10:58:42.951+03	2021-10-28 10:58:42.951+03
36	user	123	2021-10-28 10:58:45.389+03	2021-10-28 10:58:45.376+03	2021-10-28 10:58:45.376+03
37	user	0	2021-10-28 10:58:47.122+03	2021-10-28 10:58:47.13+03	2021-10-28 10:58:47.13+03
38	user	-0.005973917643229167	2021-10-28 10:58:47.182+03	2021-10-28 10:58:47.174+03	2021-10-28 10:58:47.174+03
39	user	-0.027721455891927083	2021-10-28 10:58:47.238+03	2021-10-28 10:58:47.232+03	2021-10-28 10:58:47.232+03
40	user	-0.046575215657552085	2021-10-28 10:58:47.29+03	2021-10-28 10:58:47.284+03	2021-10-28 10:58:47.284+03
41	user	-0.07109354654947916	2021-10-28 10:58:47.338+03	2021-10-28 10:58:47.333+03	2021-10-28 10:58:47.333+03
42	user	-0.0825201416015625	2021-10-28 10:58:47.387+03	2021-10-28 10:58:47.377+03	2021-10-28 10:58:47.377+03
43	user	-0.098001708984375	2021-10-28 10:58:47.436+03	2021-10-28 10:58:47.435+03	2021-10-28 10:58:47.435+03
44	user	-0.10152577718098958	2021-10-28 10:58:47.506+03	2021-10-28 10:58:47.498+03	2021-10-28 10:58:47.498+03
45	user	-0.11098114013671875	2021-10-28 10:58:47.556+03	2021-10-28 10:58:47.546+03	2021-10-28 10:58:47.546+03
46	user	-0.12815531412760417	2021-10-28 10:58:47.609+03	2021-10-28 10:58:47.603+03	2021-10-28 10:58:47.603+03
47	user	-0.14378875732421875	2021-10-28 10:58:47.663+03	2021-10-28 10:58:47.655+03	2021-10-28 10:58:47.655+03
48	user	-0.18035542805989582	2021-10-28 10:58:47.808+03	2021-10-28 10:58:47.797+03	2021-10-28 10:58:47.797+03
49	user	-0.18640777587890625	2021-10-28 10:58:47.846+03	2021-10-28 10:58:47.846+03	2021-10-28 10:58:47.846+03
50	user	-0.193065185546875	2021-10-28 10:58:47.894+03	2021-10-28 10:58:47.883+03	2021-10-28 10:58:47.883+03
51	user	-0.19972259521484376	2021-10-28 10:58:47.937+03	2021-10-28 10:58:47.929+03	2021-10-28 10:58:47.929+03
52	user	-0.2047156778971354	2021-10-28 10:58:47.987+03	2021-10-28 10:58:47.981+03	2021-10-28 10:58:47.981+03
53	user	-0.2063800048828125	2021-10-28 10:58:48.038+03	2021-10-28 10:58:48.032+03	2021-10-28 10:58:48.032+03
54	user	-0.2063800048828125	2021-10-28 10:58:48.081+03	2021-10-28 10:58:48.071+03	2021-10-28 10:58:48.071+03
55	user	-0.20305135091145834	2021-10-28 10:58:48.126+03	2021-10-28 10:58:48.116+03	2021-10-28 10:58:48.116+03
56	user	-0.19709635416666665	2021-10-28 10:58:48.166+03	2021-10-28 10:58:48.162+03	2021-10-28 10:58:48.162+03
57	user	-0.17324055989583334	2021-10-28 10:58:48.307+03	2021-10-28 10:58:48.312+03	2021-10-28 10:58:48.312+03
58	user	-0.166435546875	2021-10-28 10:58:48.463+03	2021-10-28 10:58:48.46+03	2021-10-28 10:58:48.46+03
59	user	-0.166435546875	2021-10-28 10:58:48.507+03	2021-10-28 10:58:48.496+03	2021-10-28 10:58:48.496+03
60	user	0	2021-10-28 10:58:48.533+03	2021-10-28 10:58:48.541+03	2021-10-28 10:58:48.541+03
61	user	0	2021-10-28 10:58:48.57+03	2021-10-28 10:58:48.563+03	2021-10-28 10:58:48.563+03
62	user	0	2021-10-28 10:58:48.959+03	2021-10-28 10:58:48.95+03	2021-10-28 10:58:48.95+03
63	user	0	2021-10-28 10:58:49+03	2021-10-28 10:58:48.985+03	2021-10-28 10:58:48.985+03
64	user	0	2021-10-28 10:58:50.14+03	2021-10-28 10:58:50.13+03	2021-10-28 10:58:50.13+03
65	user	0	2021-10-28 10:58:50.172+03	2021-10-28 10:58:50.159+03	2021-10-28 10:58:50.159+03
66	user	0	2021-10-28 10:58:51.754+03	2021-10-28 10:58:51.744+03	2021-10-28 10:58:51.744+03
67	user	0	2021-10-28 10:58:51.787+03	2021-10-28 10:58:51.772+03	2021-10-28 10:58:51.772+03
68	user	0	2021-10-28 10:58:51.814+03	2021-10-28 10:58:51.802+03	2021-10-28 10:58:51.802+03
69	user	0	2021-10-28 10:58:51.855+03	2021-10-28 10:58:51.844+03	2021-10-28 10:58:51.844+03
70	user	0	2021-10-28 10:58:52.189+03	2021-10-28 10:58:52.179+03	2021-10-28 10:58:52.179+03
71	user	0.16809982299804688	2021-10-28 10:58:52.213+03	2021-10-28 10:58:52.202+03	2021-10-28 10:58:52.202+03
72	user	0	2021-10-28 10:58:52.246+03	2021-10-28 10:58:52.284+03	2021-10-28 10:58:52.284+03
73	user	0	2021-10-28 10:58:52.923+03	2021-10-28 10:58:52.908+03	2021-10-28 10:58:52.908+03
74	user	0.31711092631022136	2021-10-28 10:58:52.95+03	2021-10-28 10:58:52.939+03	2021-10-28 10:58:52.939+03
75	user	0	2021-10-28 10:58:52.986+03	2021-10-28 10:58:52.974+03	2021-10-28 10:58:52.974+03
76	user	0	2021-10-28 10:59:00.214+03	2021-10-28 10:59:00.21+03	2021-10-28 10:59:00.21+03
77	user	0.051037012736002606	2021-10-28 10:59:00.246+03	2021-10-28 10:59:00.237+03	2021-10-28 10:59:00.237+03
78	user	0.4479895273844401	2021-10-28 10:59:00.315+03	2021-10-28 10:59:00.304+03	2021-10-28 10:59:00.304+03
79	user	0.8370324961344401	2021-10-28 10:59:00.352+03	2021-10-28 10:59:00.343+03	2021-10-28 10:59:00.343+03
80	user	0.9449441782633463	2021-10-28 10:59:00.398+03	2021-10-28 10:59:00.391+03	2021-10-28 10:59:00.391+03
81	user	0	2021-10-28 10:59:00.434+03	2021-10-28 10:59:00.423+03	2021-10-28 10:59:00.423+03
82	user	0	2021-10-28 10:59:01.64+03	2021-10-28 10:59:01.635+03	2021-10-28 10:59:01.635+03
83	user	-0.007784932454427083	2021-10-28 10:59:01.675+03	2021-10-28 10:59:01.683+03	2021-10-28 10:59:01.683+03
84	user	-0.06021199544270833	2021-10-28 10:59:01.743+03	2021-10-28 10:59:01.735+03	2021-10-28 10:59:01.735+03
85	user	-0.10192586263020834	2021-10-28 10:59:01.827+03	2021-10-28 10:59:01.812+03	2021-10-28 10:59:01.812+03
86	user	-0.12649098714192708	2021-10-28 10:59:01.889+03	2021-10-28 10:59:01.882+03	2021-10-28 10:59:01.882+03
87	user	-0.1364771525065104	2021-10-28 10:59:02.223+03	2021-10-28 10:59:02.214+03	2021-10-28 10:59:02.214+03
88	user	-0.158319091796875	2021-10-28 10:59:03.039+03	2021-10-28 10:59:03.033+03	2021-10-28 10:59:03.033+03
89	user	0.31336527506510414	2021-10-28 10:59:03.278+03	2021-10-28 10:59:03.268+03	2021-10-28 10:59:03.268+03
90	user	0	2021-10-28 10:59:03.318+03	2021-10-28 10:59:03.313+03	2021-10-28 10:59:03.313+03
91	user	0	2021-10-28 10:59:06.553+03	2021-10-28 10:59:06.551+03	2021-10-28 10:59:06.551+03
92	user	0	2021-10-28 10:59:06.585+03	2021-10-28 10:59:06.586+03	2021-10-28 10:59:06.586+03
93	user	-0.003328653971354167	2021-10-28 10:59:06.672+03	2021-10-28 10:59:06.664+03	2021-10-28 10:59:06.664+03
94	user	-0.020809834798177083	2021-10-28 10:59:06.719+03	2021-10-28 10:59:06.71+03	2021-10-28 10:59:06.71+03
95	user	-0.03968292236328125	2021-10-28 10:59:06.765+03	2021-10-28 10:59:06.757+03	2021-10-28 10:59:06.757+03
96	user	-0.05852589925130208	2021-10-28 10:59:06.811+03	2021-10-28 10:59:06.803+03	2021-10-28 10:59:06.803+03
97	user	-0.07074991861979167	2021-10-28 10:59:07.069+03	2021-10-28 10:59:07.06+03	2021-10-28 10:59:07.06+03
98	user	-0.07656036376953125	2021-10-28 10:59:08.133+03	2021-10-28 10:59:08.122+03	2021-10-28 10:59:08.122+03
99	user	0.023300984700520833	2021-10-28 10:59:08.382+03	2021-10-28 10:59:08.387+03	2021-10-28 10:59:08.387+03
100	user	0	2021-10-28 10:59:08.419+03	2021-10-28 10:59:08.409+03	2021-10-28 10:59:08.409+03
101	user	0	2021-10-28 10:59:09.387+03	2021-10-28 10:59:09.377+03	2021-10-28 10:59:09.377+03
102	user	0	2021-10-28 10:59:09.468+03	2021-10-28 10:59:09.458+03	2021-10-28 10:59:09.458+03
103	user	0	2021-10-28 10:59:09.511+03	2021-10-28 10:59:09.503+03	2021-10-28 10:59:09.503+03
104	user	0	2021-10-28 10:59:09.556+03	2021-10-28 10:59:09.552+03	2021-10-28 10:59:09.552+03
105	user	0	2021-10-28 10:59:09.598+03	2021-10-28 10:59:09.588+03	2021-10-28 10:59:09.588+03
106	user	-0.0005010986328125	2021-10-28 10:59:09.636+03	2021-10-28 10:59:09.631+03	2021-10-28 10:59:09.631+03
107	user	0	2021-10-28 10:59:09.911+03	2021-10-28 10:59:09.932+03	2021-10-28 10:59:09.932+03
108	user	0.01914215087890625	2021-10-28 10:59:11.103+03	2021-10-28 10:59:11.093+03	2021-10-28 10:59:11.093+03
109	user	0.2187939453125	2021-10-28 10:59:11.4+03	2021-10-28 10:59:11.396+03	2021-10-28 10:59:11.396+03
110	user	0.06490997314453124	2021-10-28 10:59:11.675+03	2021-10-28 10:59:11.667+03	2021-10-28 10:59:11.667+03
113	user	0	2021-10-28 10:59:12.884+03	2021-10-28 10:59:12.875+03	2021-10-28 10:59:12.875+03
129	user	-0.2030023193359375	2021-10-28 10:59:16.937+03	2021-10-28 10:59:16.927+03	2021-10-28 10:59:16.927+03
134	user	-0.25631062825520834	2021-10-28 10:59:17.147+03	2021-10-28 10:59:17.14+03	2021-10-28 10:59:17.14+03
135	user	0	2021-10-28 10:59:19.886+03	2021-10-28 10:59:19.875+03	2021-10-28 10:59:19.875+03
144	user	0.0033287556966145834	2021-10-28 10:59:21.952+03	2021-10-28 10:59:21.945+03	2021-10-28 10:59:21.945+03
154	user	0	2021-10-28 10:59:25.62+03	2021-10-28 10:59:25.611+03	2021-10-28 10:59:25.611+03
155	user	0	2021-10-28 10:59:26.477+03	2021-10-28 10:59:26.467+03	2021-10-28 10:59:26.467+03
111	user	0	2021-10-28 10:59:11.711+03	2021-10-28 10:59:11.702+03	2021-10-28 10:59:11.702+03
112	user	0	2021-10-28 10:59:12.807+03	2021-10-28 10:59:12.796+03	2021-10-28 10:59:12.796+03
121	user	-0.15644938151041668	2021-10-28 10:59:13.504+03	2021-10-28 10:59:13.499+03	2021-10-28 10:59:13.499+03
122	user	-0.18640777587890625	2021-10-28 10:59:14.984+03	2021-10-28 10:59:14.98+03	2021-10-28 10:59:14.98+03
123	user	-0.19306528727213543	2021-10-28 10:59:15.789+03	2021-10-28 10:59:15.779+03	2021-10-28 10:59:15.779+03
126	user	-0.03025146484375	2021-10-28 10:59:16.786+03	2021-10-28 10:59:16.777+03	2021-10-28 10:59:16.777+03
132	user	-0.2492211405436198	2021-10-28 10:59:17.065+03	2021-10-28 10:59:17.055+03	2021-10-28 10:59:17.055+03
138	user	0.21137308756510417	2021-10-28 10:59:20.075+03	2021-10-28 10:59:20.069+03	2021-10-28 10:59:20.069+03
141	user	0.28626912434895835	2021-10-28 10:59:21.804+03	2021-10-28 10:59:21.798+03	2021-10-28 10:59:21.798+03
147	user	0.011483968098958333	2021-10-28 10:59:22.113+03	2021-10-28 10:59:22.104+03	2021-10-28 10:59:22.104+03
151	user	0	2021-10-28 10:59:24.974+03	2021-10-28 10:59:24.966+03	2021-10-28 10:59:24.966+03
152	user	0	2021-10-28 10:59:25.545+03	2021-10-28 10:59:25.536+03	2021-10-28 10:59:25.536+03
114	user	-0.018702189127604168	2021-10-28 10:59:12.927+03	2021-10-28 10:59:12.919+03	2021-10-28 10:59:12.919+03
128	user	-0.16808064778645834	2021-10-28 10:59:16.896+03	2021-10-28 10:59:16.886+03	2021-10-28 10:59:16.886+03
130	user	-0.2237903849283854	2021-10-28 10:59:16.978+03	2021-10-28 10:59:16.969+03	2021-10-28 10:59:16.969+03
136	user	0	2021-10-28 10:59:19.966+03	2021-10-28 10:59:19.965+03	2021-10-28 10:59:19.965+03
143	user	0	2021-10-28 10:59:21.927+03	2021-10-28 10:59:21.912+03	2021-10-28 10:59:21.912+03
145	user	0.016643575032552083	2021-10-28 10:59:22.026+03	2021-10-28 10:59:22.017+03	2021-10-28 10:59:22.017+03
115	user	-0.031532694498697916	2021-10-28 10:59:12.976+03	2021-10-28 10:59:12.978+03	2021-10-28 10:59:12.978+03
117	user	-0.10070343017578125	2021-10-28 10:59:13.077+03	2021-10-28 10:59:13.067+03	2021-10-28 10:59:13.067+03
119	user	-0.13452687581380207	2021-10-28 10:59:13.167+03	2021-10-28 10:59:13.158+03	2021-10-28 10:59:13.158+03
124	user	0	2021-10-28 10:59:15.823+03	2021-10-28 10:59:15.812+03	2021-10-28 10:59:15.812+03
125	user	0	2021-10-28 10:59:16.75+03	2021-10-28 10:59:16.745+03	2021-10-28 10:59:16.745+03
131	user	-0.24222910563151043	2021-10-28 10:59:17.022+03	2021-10-28 10:59:17.012+03	2021-10-28 10:59:17.012+03
139	user	0	2021-10-28 10:59:20.115+03	2021-10-28 10:59:20.108+03	2021-10-28 10:59:20.108+03
140	user	0	2021-10-28 10:59:21.776+03	2021-10-28 10:59:21.767+03	2021-10-28 10:59:21.767+03
146	user	0.0133148193359375	2021-10-28 10:59:22.069+03	2021-10-28 10:59:22.06+03	2021-10-28 10:59:22.06+03
116	user	-0.06640106201171875	2021-10-28 10:59:13.032+03	2021-10-28 10:59:13.024+03	2021-10-28 10:59:13.024+03
118	user	-0.11796437581380208	2021-10-28 10:59:13.125+03	2021-10-28 10:59:13.115+03	2021-10-28 10:59:13.115+03
120	user	-0.14996724446614584	2021-10-28 10:59:13.21+03	2021-10-28 10:59:13.207+03	2021-10-28 10:59:13.207+03
127	user	-0.12289154052734375	2021-10-28 10:59:16.849+03	2021-10-28 10:59:16.839+03	2021-10-28 10:59:16.839+03
133	user	-0.25631062825520834	2021-10-28 10:59:17.105+03	2021-10-28 10:59:17.095+03	2021-10-28 10:59:17.095+03
137	user	0.19349395751953125	2021-10-28 10:59:19.995+03	2021-10-28 10:59:20.002+03	2021-10-28 10:59:20.002+03
142	user	0	2021-10-28 10:59:21.851+03	2021-10-28 10:59:21.843+03	2021-10-28 10:59:21.843+03
148	user	0.009986165364583334	2021-10-28 10:59:22.156+03	2021-10-28 10:59:22.158+03	2021-10-28 10:59:22.158+03
149	user	0.009986165364583334	2021-10-28 10:59:22.511+03	2021-10-28 10:59:22.503+03	2021-10-28 10:59:22.503+03
150	user	0.009986165364583334	2021-10-28 10:59:24.938+03	2021-10-28 10:59:24.929+03	2021-10-28 10:59:24.929+03
153	user	0.0085919189453125	2021-10-28 10:59:25.578+03	2021-10-28 10:59:25.57+03	2021-10-28 10:59:25.57+03
156	user	0.03661580403645833	2021-10-28 10:59:26.505+03	2021-10-28 10:59:26.499+03	2021-10-28 10:59:26.499+03
157	user	0	2021-10-28 10:59:27.563+03	2021-10-28 10:59:27.555+03	2021-10-28 10:59:27.555+03
158	user	123	2021-10-28 10:59:32.674+03	2021-10-28 10:59:32.674+03	2021-10-28 10:59:32.674+03
159	user	123	2021-10-28 10:59:33.828+03	2021-10-28 10:59:33.829+03	2021-10-28 10:59:33.829+03
160	user	123	2021-10-28 10:59:34.854+03	2021-10-28 10:59:34.854+03	2021-10-28 10:59:34.854+03
161	user	123	2021-10-28 10:59:35.9+03	2021-10-28 10:59:35.9+03	2021-10-28 10:59:35.9+03
162	user	123	2021-10-28 10:59:36.927+03	2021-10-28 10:59:36.93+03	2021-10-28 10:59:36.93+03
163	user	123	2021-10-28 10:59:38.7+03	2021-10-28 10:59:38.701+03	2021-10-28 10:59:38.701+03
164	user	123	2021-10-28 10:59:39.931+03	2021-10-28 10:59:39.931+03	2021-10-28 10:59:39.931+03
165	user	123	2021-10-28 10:59:41.387+03	2021-10-28 10:59:41.388+03	2021-10-28 10:59:41.388+03
166	user	123	2021-10-28 10:59:42.868+03	2021-10-28 10:59:42.869+03	2021-10-28 10:59:42.869+03
167	user	123	2021-10-28 11:00:09.525+03	2021-10-28 11:00:09.518+03	2021-10-28 11:00:09.518+03
168	user	123	2021-10-28 11:00:10.819+03	2021-10-28 11:00:10.811+03	2021-10-28 11:00:10.811+03
169	user	123	2021-10-28 11:00:15.479+03	2021-10-28 11:00:15.479+03	2021-10-28 11:00:15.479+03
170	Denis22	111	2021-11-09 00:59:07.625+03	2021-11-09 00:59:07.68+03	2021-11-09 00:59:07.68+03
\.


                                                                                                                                                                                                                                                                                                                                   4159.dat                                                                                            0000600 0004000 0002000 00000000005 14162101241 0014237 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           4161.dat                                                                                            0000600 0004000 0002000 00000002631 14162101241 0014237 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        230	2021-10-01 01:34:58.438+03	2021-10-01 01:34:58.438+03	46	48	11	41	t	steellllf1	JCJO	Jebus Cross	0cwTe0N-KF08FSv-5zw5Q5C	100
231	2021-10-01 14:17:41.624+03	2021-10-01 14:17:41.624+03	46	48	12	42	f	steellllf1	JCJO_FREE	Jebus Cross	zmbtSQT-QSAWtnv-L430Jyp	0
223	2021-10-01 01:34:18.283+03	2021-10-01 01:34:18.283+03	46	48	10	36	f	steellllf1	??????_2021	mt_Jebus	o7oM8rK-bKrdiCx-A9PgBYW	150
224	2021-10-01 01:34:18.289+03	2021-10-01 01:34:18.289+03	46	48	10	38	f	steellllf1	??????_2021	6lm10a	o7oM8rK-bKrdiCx-A9PgBYW	150
225	2021-10-01 01:34:18.293+03	2021-10-01 01:34:18.293+03	46	48	10	39	f	steellllf1	??????_2021	spider	o7oM8rK-bKrdiCx-A9PgBYW	150
226	2021-10-01 01:34:18.297+03	2021-10-01 01:34:18.297+03	46	48	10	40	f	steellllf1	??????_2021	mini-Nosta	o7oM8rK-bKrdiCx-A9PgBYW	150
227	2021-10-01 01:34:18.3+03	2021-10-01 01:34:18.3+03	46	48	10	20	f	steellllf1	??????_2021	h3dm1	o7oM8rK-bKrdiCx-A9PgBYW	150
228	2021-10-01 01:34:18.304+03	2021-10-01 01:34:18.304+03	46	48	10	29	f	steellllf1	??????_2021	2sm4d(3)	o7oM8rK-bKrdiCx-A9PgBYW	150
229	2021-10-01 01:34:18.308+03	2021-10-01 01:34:18.308+03	46	48	10	15	f	steellllf1	??????_2021	Jebus Cross	o7oM8rK-bKrdiCx-A9PgBYW	150
232	2021-10-05 14:22:04.298+03	2021-10-05 14:22:04.298+03	49	51	11	41	f	Roma1991	JCJO	Jebus Cross	ypkRaIb-XSVoXUb-CZ3fyNx	100
222	2021-09-30 16:20:20.086+03	2021-09-30 16:20:20.086+03	44	46	11	41	t	umdomby	JCJO	Jebus Cross	R0IugCY-FZ6sGp2-pklDokd	100
\.


                                                                                                       4163.dat                                                                                            0000600 0004000 0002000 00000002753 14162101241 0014246 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        319	10	freeDom	FFl6R8X-eGDlSa0-UCZCjth	???????? ?????? 2021	t	2021-09-30 15:58:44.841762+03	2021-09-30 15:58:44.841762+03	??????_2021	7		\N	10
320	10	umdomby	w8SKrmd-m4cjp0X-H935Dsr	2021 JC	t	2021-09-30 16:10:34.521408+03	2021-09-30 16:10:34.521408+03	??????_2021	1	Jebus Cross	15	10
324	100	steellllf1	0cwTe0N-KF08FSv-5zw5Q5C	Fund to game steellllf1 ??????_2021 h3dm1	t	2021-10-01 01:59:21.449027+03	2021-10-01 01:59:21.449027+03	steellllf1	4	Jebus Cross	41	11
323	250	steellllf1	FMaoo8d-eijTKlA-qZn8uhm		t	2021-10-01 01:40:07.657324+03	2021-10-01 01:40:07.657324+03	steellllf1	3		\N	\N
325	155	umdomby	mNChlJd-aivLuES-Y9wcxwQ	5 ??????.	t	2021-10-04 18:48:31.15325+03	2021-10-04 18:48:31.15325+03	umdomby	3		\N	\N
326	150	cyberbet	8YptbM1-4OjwZHS-ikRSe1L	bonus +150	t	2021-10-05 13:40:56.438044+03	2021-10-05 13:40:56.438044+03	YAR	3		\N	\N
330	5	umdomby	7bNjSFk-xskSEIg-SR1WaND	+5	t	2021-10-12 19:59:46.663732+03	2021-10-12 19:59:46.663732+03	steellllf1	3		\N	\N
332	1	umdomby	OpixIq7-UMF8dlm-jihmvVz	+1	t	2021-10-13 06:56:14.161311+03	2021-10-13 06:56:14.161311+03	steellllf1	3		\N	\N
327	150	Roma1991	150150150150150	registration bonus +150??????.	t	2021-10-05 13:53:51.090868+03	2021-10-05 13:53:51.090868+03	Roma1991	3		\N	\N
333	100	umdomby	R0IugCY-FZ6sGp2-pklDokd	Fund to game JCJO Jebus Cross	t	2021-10-13 07:35:13.929037+03	2021-10-13 07:35:13.929037+03	umdomby	5	Jebus Cross	41	11
334	1	123	ilXfmad-SptuXHZ-3tln1g3	123	t	2021-11-03 01:01:45.980807+03	2021-11-03 01:01:45.980807+03	Roma1991	3		\N	\N
\.


                     4178.dat                                                                                            0000600 0004000 0002000 00000003601 14162101241 0014245 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	f	Denis22		HEROES HOTA	11	1	1	f	f	2021-10-18 05:39:28.893+03	2021-10-18 05:39:28.893+03
2	f	Denis22		HEROES HOTA	da	11	1	f	f	2021-10-18 05:42:51.979+03	2021-10-18 05:42:51.979+03
3	f	Denis22		HEROES HOTA	312	123	11	f	f	2021-10-18 06:14:51.767+03	2021-10-18 06:14:51.767+03
4	f	Denis22		HEROES HOTA	22	22	22	f	f	2021-10-18 07:56:44.649+03	2021-10-18 07:56:44.649+03
5	f	Denis22		HEROES HOTA	33	33	33	f	f	2021-10-18 07:57:03.993+03	2021-10-18 07:57:03.993+03
6	f	Denis22		HEROES HOTA	44	44	44	f	f	2021-10-18 07:57:41.787+03	2021-10-18 07:57:41.787+03
7	f	Denis22		HEROES HOTA	66	66	66	f	f	2021-10-18 08:04:18.867+03	2021-10-18 08:04:18.867+03
8	f	Denis22		HEROES HOTA	77	77	77	f	f	2021-10-18 08:07:52.621+03	2021-10-18 08:07:52.621+03
9	f	Denis22		HEROES HOTA	88	888	88	f	f	2021-10-18 08:09:50.394+03	2021-10-18 08:09:50.394+03
10	f	Denis22		HEROES HOTA	99	99	99	f	f	2021-10-18 08:10:08.642+03	2021-10-18 08:10:08.642+03
11	f	Denis22		HEROES HOTA	2	2	2	f	f	2021-10-18 08:22:47.38+03	2021-10-18 08:22:47.38+03
12	f	Denis22		HEROES HOTA	2	2	2	f	f	2021-10-18 08:23:24.387+03	2021-10-18 08:23:24.387+03
13	f	Denis22		HEROES HOTA	2	2	2	f	f	2021-10-18 08:24:10.657+03	2021-10-18 08:24:10.657+03
14	f	Denis22		HEROES HOTA	44	44	44	f	f	2021-10-18 08:32:29.506+03	2021-10-18 08:32:29.506+03
15	f	Denis22		HEROES HOTA	5	5	5	f	f	2021-10-18 08:34:03.672+03	2021-10-18 08:34:03.672+03
16	f	Denis22		HEROES HOTA	6	6	6	f	f	2021-10-18 09:09:31.391+03	2021-10-18 09:09:31.391+03
17	f	Denis22		HEROES HOTA	7	7	7	f	f	2021-10-18 13:27:30.75+03	2021-10-18 13:27:30.75+03
18	f	Denis22		HEROES HOTA	8	8	8	f	f	2021-10-18 13:34:59.62+03	2021-10-18 13:34:59.62+03
19	f	umdomby		HEROES HOTA	9	9	9	f	f	2021-10-18 20:13:10.561+03	2021-10-18 20:13:10.561+03
20	f	Denis22		HEROES HOTA	0	0	0	f	f	2021-10-20 07:53:12.065+03	2021-10-20 07:53:12.065+03
21	f	umdomby		HEROES HOTA	JC 12 7 2	1	1	f	f	2021-10-20 08:44:21.382+03	2021-10-20 08:44:21.382+03
\.


                                                                                                                               4165.dat                                                                                            0000600 0004000 0002000 00000000005 14162101241 0014234 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           4167.dat                                                                                            0000600 0004000 0002000 00000000005 14162101242 0014237 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           4169.dat                                                                                            0000600 0004000 0002000 00000000005 14162101242 0014241 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           4171.dat                                                                                            0000600 0004000 0002000 00000000557 14162101242 0014246 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        12	2021-09-28 13:01:39.996+03	JCJO_FREE	f	HEROES HOTA	2021-09-28 13:01:39.996+03	2021-09-28 13:01:39.996+03	0	0	f	0
11	2021-09-27 13:41:48.020099+03	JCJO	f	HEROES HOTA	2021-07-25 16:30:24.611+03	2021-07-25 16:30:24.611+03	100	200	f	0
10	2021-09-16 15:59:26.336105+03	??????_2021	f	HEROES HOTA GP	2021-09-16 00:32:43.609+03	2021-09-16 00:32:43.609+03	150	10	t	10
\.


                                                                                                                                                 4173.dat                                                                                            0000600 0004000 0002000 00000002463 14162101242 0014246 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        46	umdomby	250	https://www.twitch.tv/robotavatar						\N	\N	1000	f	46.53.240.71	46.53.245.68	46.53.240.71;::1;::ffff:192.168.0.101;46.53.245.68	2021-09-28 13:10:23.868+03	2021-09-28 13:10:23.868+03	44		55	0	0	0	0	10	161	0	100	0	0	0
51	Roma1991	360	https://www.twitch.tv/Roma1991						\N	\N	1000	f	46.53.240.71	\N	46.53.240.71	2021-10-05 13:53:51.082+03	2021-10-05 13:53:51.082+03	49		151	0	0	0	0	0	150	0	0	0	0	0
48	steellllf1	170	https://www.twitch.tv/steellllf1						\N	\N	1000	f	46.53.245.163	46.216.113.109	46.53.245.163;46.216.113.109	2021-10-01 01:32:46.82+03	2021-10-01 01:32:46.82+03	46		256	0	0	0	0	0	250	100	0	0	0	0
49	YAR	444	https://www.twitch.tv/yar_				https://vk.com/yar_ki		\N	\N	1000	f	46.242.9.15	46.242.9.15	46.242.9.15	2021-10-02 01:46:45.306+03	2021-10-02 01:46:45.306+03	47		150	0	0	0	0	0	0	0	0	0	0	0
47	freeDom	150	https://www.twitch.tv/freedom22						\N	\N	1000	f	46.53.240.71	::ffff:192.168.0.101	46.53.240.71;::ffff:127.0.0.1;::1;46.53.240.23;::ffff:192.168.0.101	2021-09-30 11:42:06.732+03	2021-09-30 11:42:06.732+03	45		150	0	0	0	0	0	0	0	0	0	0	0
50	Denis22	150	https://www.twitch.tv/222						\N	\N	1000	f	46.53.240.71	46.53.242.7	46.53.240.71;::1;::ffff:192.168.0.100;::ffff:192.168.0.101;46.53.240.218;46.53.242.7	2021-10-05 13:35:31.138+03	2021-10-05 13:35:31.138+03	48		150	0	0	0	0	0	0	0	0	0	0	0
\.


                                                                                                                                                                                                             4175.dat                                                                                            0000600 0004000 0002000 00000001500 14162101242 0014237 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        44	umdom2@gmail.com	$2b$05$xKEhgtjLiRVzzVofDPsRo.awKLoYGgqbjepJr6wrMCocL75pM8e5C	ADMIN	2021-09-28 13:10:23.856+03	2021-09-28 13:10:23.856+03
45	umdom22@gmail.com	$2b$05$REGow1uq85u3rUuze0KkWOdk2h/9b1TrUaRQVtylyDKRCY3bu6OJy	USER	2021-09-30 11:42:06.716+03	2021-09-30 11:42:06.716+03
46	steellll@tut.by	$2b$05$V2hMmQYmm.rSRQxCeUKPbeMuV.jBeD2koCtaM6sIt0Eaw1thVjsIW	USER	2021-10-01 01:32:46.809+03	2021-10-01 01:32:46.809+03
48	222	$2b$05$pyQLF43YyixAau6wyeA0de0lUjtI7uHSJ8VRcMDlsedRIVrEPyK9q	USER	2021-10-05 13:35:31.13+03	2021-10-05 13:35:31.13+03
49	umdom22222@gmail.com	$2b$05$erfjZ6RxT6PoeZAKhmn2eujDP9D2l77SU2ljkGGHIXLSq4MNCHhee	USER	2021-10-05 13:53:51.065+03	2021-10-05 13:53:51.065+03
47	lj-88@mail.ru	$2b$05$qNry.1iXwSkhQ7oer1vhr.58Ifq6BgBdxGNc2u.Y5xtbG6vX8xToW	USER	2021-10-02 01:46:45.297+03	2021-10-02 01:46:45.297+03
\.


                                                                                                                                                                                                restore.sql                                                                                         0000600 0004000 0002000 00000100627 14162101242 0015363 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5 (Ubuntu 13.5-2.pgdg20.04+1)
-- Dumped by pg_dump version 14.1 (Ubuntu 14.1-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE dabbr5qukq3ulp;
--
-- Name: dabbr5qukq3ulp; Type: DATABASE; Schema: -; Owner: strphjhvqamiyv
--

CREATE DATABASE dabbr5qukq3ulp WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE dabbr5qukq3ulp OWNER TO strphjhvqamiyv;

\connect dabbr5qukq3ulp

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: dabbr5qukq3ulp; Type: DATABASE PROPERTIES; Schema: -; Owner: strphjhvqamiyv
--

ALTER DATABASE dabbr5qukq3ulp SET "TimeZone" TO 'Europe/Moscow';


\connect dabbr5qukq3ulp

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: tsm_system_rows; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS tsm_system_rows WITH SCHEMA public;


--
-- Name: EXTENSION tsm_system_rows; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION tsm_system_rows IS 'TABLESAMPLE method which accepts number of rows as a limit';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: basket_devices; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.basket_devices (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "basketId" integer,
    "deviceId" integer
);


ALTER TABLE public.basket_devices OWNER TO strphjhvqamiyv;

--
-- Name: basket_devices_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.basket_devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.basket_devices_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: basket_devices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.basket_devices_id_seq OWNED BY public.basket_devices.id;


--
-- Name: baskets; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.baskets (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public.baskets OWNER TO strphjhvqamiyv;

--
-- Name: baskets_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.baskets_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: baskets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;


--
-- Name: brands; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    idname integer,
    amount integer,
    brand_payment integer DEFAULT 0 NOT NULL,
    brand_description character varying(255) DEFAULT ''::character varying
);


ALTER TABLE public.brands OWNER TO strphjhvqamiyv;

--
-- Name: brands_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.brands_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;


--
-- Name: chats; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.chats (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    message character varying(255) NOT NULL,
    date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.chats OWNER TO strphjhvqamiyv;

--
-- Name: chats_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.chats_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.chats_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: chats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.chats_id_seq OWNED BY public.chats.id;


--
-- Name: device_infos; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.device_infos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deviceId" integer
);


ALTER TABLE public.device_infos OWNER TO strphjhvqamiyv;

--
-- Name: device_infos_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.device_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.device_infos_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: device_infos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.device_infos_id_seq OWNED BY public.device_infos.id;


--
-- Name: devices; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.devices (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "userdatumId" integer,
    "typeId" integer,
    "brandId" integer,
    dev_start boolean DEFAULT false NOT NULL,
    dev_username character varying(255) DEFAULT ''::character varying,
    dev_typename character varying(255) DEFAULT ''::character varying,
    dev_brandname character varying(255) DEFAULT ''::character varying,
    dev_billid character varying(255) DEFAULT ''::character varying,
    dev_amount integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.devices OWNER TO strphjhvqamiyv;

--
-- Name: devices_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.devices_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: devices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.devices_id_seq OWNED BY public.devices.id;


--
-- Name: donates; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.donates (
    id integer NOT NULL,
    amount integer NOT NULL,
    username character varying(255) NOT NULL,
    "billId" character varying(255) NOT NULL,
    comment character varying(255),
    status boolean DEFAULT false NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    nametype text,
    code_transaction integer,
    "brandName" character varying(50) DEFAULT 'JC'::character varying,
    brandid integer,
    typeid integer
);


ALTER TABLE public.donates OWNER TO strphjhvqamiyv;

--
-- Name: donates_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.donates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.donates_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: donates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.donates_id_seq OWNED BY public.donates.id;


--
-- Name: one_on_ones; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.one_on_ones (
    id integer NOT NULL,
    start_status boolean DEFAULT false,
    username character varying(255) NOT NULL,
    oppname character varying(255) DEFAULT ''::character varying,
    game character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    amount integer NOT NULL,
    "time" integer NOT NULL,
    "userCheck" boolean DEFAULT false,
    "oppCheck" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.one_on_ones OWNER TO strphjhvqamiyv;

--
-- Name: one_on_ones_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.one_on_ones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.one_on_ones_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: one_on_ones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.one_on_ones_id_seq OWNED BY public.one_on_ones.id;


--
-- Name: rating_maps; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.rating_maps (
    id integer NOT NULL,
    rating_username character varying(255) NOT NULL,
    rating_type character varying(255) NOT NULL,
    rating_brand character varying(255) NOT NULL,
    rating_rate integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.rating_maps OWNER TO strphjhvqamiyv;

--
-- Name: rating_maps_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.rating_maps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rating_maps_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: rating_maps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.rating_maps_id_seq OWNED BY public.rating_maps.id;


--
-- Name: ratings; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.ratings (
    id integer NOT NULL,
    rating_username character varying(255) NOT NULL,
    rating_type character varying(255) NOT NULL,
    rating_brand character varying(255) NOT NULL,
    rating_rate integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.ratings OWNER TO strphjhvqamiyv;

--
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ratings_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- Name: type_brands; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.type_brands (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "typeId" integer,
    "brandId" integer
);


ALTER TABLE public.type_brands OWNER TO strphjhvqamiyv;

--
-- Name: type_brands_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.type_brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.type_brands_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: type_brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.type_brands_id_seq OWNED BY public.type_brands.id;


--
-- Name: types; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.types (
    id integer NOT NULL,
    name timestamp with time zone,
    nametype character varying(255) NOT NULL,
    start boolean,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    amount integer,
    fund integer DEFAULT 0,
    grandprix boolean DEFAULT false NOT NULL,
    winner integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.types OWNER TO strphjhvqamiyv;

--
-- Name: types_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.types_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;


--
-- Name: userdata; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.userdata (
    id integer NOT NULL,
    username character varying(255),
    rating integer DEFAULT 0 NOT NULL,
    twitch character varying(255) NOT NULL,
    facebook character varying(255),
    instagram character varying(255),
    telegram character varying(255),
    vk character varying(255),
    ok character varying(255),
    img character varying(255),
    promo character varying(255),
    bet integer DEFAULT 1000,
    ban boolean DEFAULT false,
    ipreg character varying(255),
    ip character varying(255),
    ipin text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    youtube character varying(255) DEFAULT 'https://www.youtube.com/'::character varying,
    user_fund integer DEFAULT 0 NOT NULL,
    "countWin" integer DEFAULT 0 NOT NULL,
    "countLoss" integer DEFAULT 0 NOT NULL,
    "promoCount" integer DEFAULT 0 NOT NULL,
    "dCyberbet" integer DEFAULT 0 NOT NULL,
    "dTypes" integer DEFAULT 0 NOT NULL,
    "dUsers" integer DEFAULT 0 NOT NULL,
    "pGame" integer DEFAULT 0 NOT NULL,
    "pFund" integer DEFAULT 0 NOT NULL,
    game integer DEFAULT 0 NOT NULL,
    ratingcy integer DEFAULT 0 NOT NULL,
    ratingcymap integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.userdata OWNER TO strphjhvqamiyv;

--
-- Name: userdata_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.userdata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.userdata_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: userdata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.userdata_id_seq OWNED BY public.userdata.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: strphjhvqamiyv
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO strphjhvqamiyv;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: strphjhvqamiyv
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO strphjhvqamiyv;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: basket_devices id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.basket_devices ALTER COLUMN id SET DEFAULT nextval('public.basket_devices_id_seq'::regclass);


--
-- Name: baskets id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);


--
-- Name: brands id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);


--
-- Name: chats id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.chats ALTER COLUMN id SET DEFAULT nextval('public.chats_id_seq'::regclass);


--
-- Name: device_infos id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.device_infos ALTER COLUMN id SET DEFAULT nextval('public.device_infos_id_seq'::regclass);


--
-- Name: devices id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices ALTER COLUMN id SET DEFAULT nextval('public.devices_id_seq'::regclass);


--
-- Name: donates id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.donates ALTER COLUMN id SET DEFAULT nextval('public.donates_id_seq'::regclass);


--
-- Name: one_on_ones id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.one_on_ones ALTER COLUMN id SET DEFAULT nextval('public.one_on_ones_id_seq'::regclass);


--
-- Name: rating_maps id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.rating_maps ALTER COLUMN id SET DEFAULT nextval('public.rating_maps_id_seq'::regclass);


--
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- Name: type_brands id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.type_brands ALTER COLUMN id SET DEFAULT nextval('public.type_brands_id_seq'::regclass);


--
-- Name: types id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);


--
-- Name: userdata id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.userdata ALTER COLUMN id SET DEFAULT nextval('public.userdata_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: basket_devices; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.basket_devices (id, "createdAt", "updatedAt", "basketId", "deviceId") FROM stdin;
\.
COPY public.basket_devices (id, "createdAt", "updatedAt", "basketId", "deviceId") FROM '$$PATH$$/4153.dat';

--
-- Data for Name: baskets; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM stdin;
\.
COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM '$$PATH$$/4155.dat';

--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.brands (id, name, "createdAt", "updatedAt", idname, amount, brand_payment, brand_description) FROM stdin;
\.
COPY public.brands (id, name, "createdAt", "updatedAt", idname, amount, brand_payment, brand_description) FROM '$$PATH$$/4157.dat';

--
-- Data for Name: chats; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.chats (id, username, message, date, "createdAt", "updatedAt") FROM stdin;
\.
COPY public.chats (id, username, message, date, "createdAt", "updatedAt") FROM '$$PATH$$/4180.dat';

--
-- Data for Name: device_infos; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.device_infos (id, title, description, "createdAt", "updatedAt", "deviceId") FROM stdin;
\.
COPY public.device_infos (id, title, description, "createdAt", "updatedAt", "deviceId") FROM '$$PATH$$/4159.dat';

--
-- Data for Name: devices; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.devices (id, "createdAt", "updatedAt", "userId", "userdatumId", "typeId", "brandId", dev_start, dev_username, dev_typename, dev_brandname, dev_billid, dev_amount) FROM stdin;
\.
COPY public.devices (id, "createdAt", "updatedAt", "userId", "userdatumId", "typeId", "brandId", dev_start, dev_username, dev_typename, dev_brandname, dev_billid, dev_amount) FROM '$$PATH$$/4161.dat';

--
-- Data for Name: donates; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.donates (id, amount, username, "billId", comment, status, "createdAt", "updatedAt", nametype, code_transaction, "brandName", brandid, typeid) FROM stdin;
\.
COPY public.donates (id, amount, username, "billId", comment, status, "createdAt", "updatedAt", nametype, code_transaction, "brandName", brandid, typeid) FROM '$$PATH$$/4163.dat';

--
-- Data for Name: one_on_ones; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.one_on_ones (id, start_status, username, oppname, game, description, amount, "time", "userCheck", "oppCheck", "createdAt", "updatedAt") FROM stdin;
\.
COPY public.one_on_ones (id, start_status, username, oppname, game, description, amount, "time", "userCheck", "oppCheck", "createdAt", "updatedAt") FROM '$$PATH$$/4178.dat';

--
-- Data for Name: rating_maps; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.rating_maps (id, rating_username, rating_type, rating_brand, rating_rate, "createdAt", "updatedAt") FROM stdin;
\.
COPY public.rating_maps (id, rating_username, rating_type, rating_brand, rating_rate, "createdAt", "updatedAt") FROM '$$PATH$$/4165.dat';

--
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.ratings (id, rating_username, rating_type, rating_brand, rating_rate, "createdAt", "updatedAt") FROM stdin;
\.
COPY public.ratings (id, rating_username, rating_type, rating_brand, rating_rate, "createdAt", "updatedAt") FROM '$$PATH$$/4167.dat';

--
-- Data for Name: type_brands; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.type_brands (id, "createdAt", "updatedAt", "typeId", "brandId") FROM stdin;
\.
COPY public.type_brands (id, "createdAt", "updatedAt", "typeId", "brandId") FROM '$$PATH$$/4169.dat';

--
-- Data for Name: types; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.types (id, name, nametype, start, description, "createdAt", "updatedAt", amount, fund, grandprix, winner) FROM stdin;
\.
COPY public.types (id, name, nametype, start, description, "createdAt", "updatedAt", amount, fund, grandprix, winner) FROM '$$PATH$$/4171.dat';

--
-- Data for Name: userdata; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.userdata (id, username, rating, twitch, facebook, instagram, telegram, vk, ok, img, promo, bet, ban, ipreg, ip, ipin, "createdAt", "updatedAt", "userId", youtube, user_fund, "countWin", "countLoss", "promoCount", "dCyberbet", "dTypes", "dUsers", "pGame", "pFund", game, ratingcy, ratingcymap) FROM stdin;
\.
COPY public.userdata (id, username, rating, twitch, facebook, instagram, telegram, vk, ok, img, promo, bet, ban, ipreg, ip, ipin, "createdAt", "updatedAt", "userId", youtube, user_fund, "countWin", "countLoss", "promoCount", "dCyberbet", "dTypes", "dUsers", "pGame", "pFund", game, ratingcy, ratingcymap) FROM '$$PATH$$/4173.dat';

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
\.
COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM '$$PATH$$/4175.dat';

--
-- Name: basket_devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.basket_devices_id_seq', 1, false);


--
-- Name: baskets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.baskets_id_seq', 1, false);


--
-- Name: brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.brands_id_seq', 44, true);


--
-- Name: chats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.chats_id_seq', 170, true);


--
-- Name: device_infos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.device_infos_id_seq', 1, false);


--
-- Name: devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.devices_id_seq', 232, true);


--
-- Name: donates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.donates_id_seq', 335, true);


--
-- Name: one_on_ones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.one_on_ones_id_seq', 21, true);


--
-- Name: rating_maps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.rating_maps_id_seq', 11, true);


--
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.ratings_id_seq', 33, true);


--
-- Name: type_brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.type_brands_id_seq', 1, false);


--
-- Name: types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.types_id_seq', 14, true);


--
-- Name: userdata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.userdata_id_seq', 51, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.users_id_seq', 49, true);


--
-- Name: basket_devices basket_devices_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT basket_devices_pkey PRIMARY KEY (id);


--
-- Name: baskets baskets_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);


--
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);


--
-- Name: chats chats_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY (id);


--
-- Name: device_infos device_infos_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT device_infos_pkey PRIMARY KEY (id);


--
-- Name: devices devices_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_pkey PRIMARY KEY (id);


--
-- Name: donates donates_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.donates
    ADD CONSTRAINT donates_pkey PRIMARY KEY (id);


--
-- Name: one_on_ones one_on_ones_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.one_on_ones
    ADD CONSTRAINT one_on_ones_pkey PRIMARY KEY (id);


--
-- Name: rating_maps rating_maps_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.rating_maps
    ADD CONSTRAINT rating_maps_pkey PRIMARY KEY (id);


--
-- Name: ratings ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- Name: type_brands type_brands_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT type_brands_pkey PRIMARY KEY (id);


--
-- Name: type_brands type_brands_typeId_brandId_key; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_brandId_key" UNIQUE ("typeId", "brandId");


--
-- Name: types types_nametype_key; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_nametype_key UNIQUE (nametype);


--
-- Name: types types_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);


--
-- Name: userdata userdata_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_pkey PRIMARY KEY (id);


--
-- Name: userdata userdata_username_key; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_username_key UNIQUE (username);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: basket_devices basket_devices_basketId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: basket_devices basket_devices_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: baskets baskets_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: device_infos device_infos_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT "device_infos_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: devices devices_brandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: devices devices_typeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: devices devices_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: devices devices_userdatumId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_userdatumId_fkey" FOREIGN KEY ("userdatumId") REFERENCES public.userdata(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: type_brands type_brands_brandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: type_brands type_brands_typeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: userdata userdata_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT "userdata_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: DATABASE dabbr5qukq3ulp; Type: ACL; Schema: -; Owner: strphjhvqamiyv
--

REVOKE CONNECT,TEMPORARY ON DATABASE dabbr5qukq3ulp FROM PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO strphjhvqamiyv;


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         