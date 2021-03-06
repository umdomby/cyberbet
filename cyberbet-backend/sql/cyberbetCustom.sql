PGDMP     9    6                y            dabbr5qukq3ulp     13.5 (Ubuntu 13.5-2.pgdg20.04+1)     14.1 (Ubuntu 14.1-2.pgdg20.04+1) z    W           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            X           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            Y           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            Z           1262    24307414    dabbr5qukq3ulp    DATABASE     c   CREATE DATABASE dabbr5qukq3ulp WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE dabbr5qukq3ulp;
                strphjhvqamiyv    false            [           0    0    DATABASE dabbr5qukq3ulp    ACL     A   REVOKE CONNECT,TEMPORARY ON DATABASE dabbr5qukq3ulp FROM PUBLIC;
                   strphjhvqamiyv    false    4186            \           0    0    dabbr5qukq3ulp    DATABASE PROPERTIES     A   ALTER DATABASE dabbr5qukq3ulp SET "TimeZone" TO 'Europe/Moscow';
                     strphjhvqamiyv    false            ]           0    0    LANGUAGE plpgsql    ACL     1   GRANT ALL ON LANGUAGE plpgsql TO strphjhvqamiyv;
                   postgres    false    719                        3079    25691156    tsm_system_rows 	   EXTENSION     C   CREATE EXTENSION IF NOT EXISTS tsm_system_rows WITH SCHEMA public;
     DROP EXTENSION tsm_system_rows;
                   false            ^           0    0    EXTENSION tsm_system_rows    COMMENT     f   COMMENT ON EXTENSION tsm_system_rows IS 'TABLESAMPLE method which accepts number of rows as a limit';
                        false    2            ?            1259    27270088    basket_devices    TABLE     ?   CREATE TABLE public.basket_devices (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "basketId" integer,
    "deviceId" integer
);
 "   DROP TABLE public.basket_devices;
       public         heap    strphjhvqamiyv    false            ?            1259    27270091    basket_devices_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.basket_devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.basket_devices_id_seq;
       public          strphjhvqamiyv    false    201            _           0    0    basket_devices_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.basket_devices_id_seq OWNED BY public.basket_devices.id;
          public          strphjhvqamiyv    false    202            ?            1259    27270093    baskets    TABLE     ?   CREATE TABLE public.baskets (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);
    DROP TABLE public.baskets;
       public         heap    strphjhvqamiyv    false            ?            1259    27270096    baskets_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.baskets_id_seq;
       public          strphjhvqamiyv    false    203            `           0    0    baskets_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;
          public          strphjhvqamiyv    false    204            ?            1259    27270098    brands    TABLE     j  CREATE TABLE public.brands (
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
       public         heap    strphjhvqamiyv    false            ?            1259    27270106    brands_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.brands_id_seq;
       public          strphjhvqamiyv    false    205            a           0    0    brands_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;
          public          strphjhvqamiyv    false    206            ?            1259    27997777    chats    TABLE       CREATE TABLE public.chats (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    message character varying(255) NOT NULL,
    date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.chats;
       public         heap    strphjhvqamiyv    false            ?            1259    27997775    chats_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.chats_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.chats_id_seq;
       public          strphjhvqamiyv    false    228            b           0    0    chats_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.chats_id_seq OWNED BY public.chats.id;
          public          strphjhvqamiyv    false    227            ?            1259    27270108    device_infos    TABLE       CREATE TABLE public.device_infos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deviceId" integer
);
     DROP TABLE public.device_infos;
       public         heap    strphjhvqamiyv    false            ?            1259    27270114    device_infos_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.device_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.device_infos_id_seq;
       public          strphjhvqamiyv    false    207            c           0    0    device_infos_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.device_infos_id_seq OWNED BY public.device_infos.id;
          public          strphjhvqamiyv    false    208            ?            1259    27270116    devices    TABLE     q  CREATE TABLE public.devices (
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
       public         heap    strphjhvqamiyv    false            ?            1259    27270128    devices_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.devices_id_seq;
       public          strphjhvqamiyv    false    209            d           0    0    devices_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.devices_id_seq OWNED BY public.devices.id;
          public          strphjhvqamiyv    false    210            ?            1259    27270130    donates    TABLE       CREATE TABLE public.donates (
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
       public         heap    strphjhvqamiyv    false            ?            1259    27270138    donates_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.donates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.donates_id_seq;
       public          strphjhvqamiyv    false    211            e           0    0    donates_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.donates_id_seq OWNED BY public.donates.id;
          public          strphjhvqamiyv    false    212            ?            1259    27996878    one_on_ones    TABLE       CREATE TABLE public.one_on_ones (
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
       public         heap    strphjhvqamiyv    false            ?            1259    27996876    one_on_ones_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.one_on_ones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.one_on_ones_id_seq;
       public          strphjhvqamiyv    false    226            f           0    0    one_on_ones_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.one_on_ones_id_seq OWNED BY public.one_on_ones.id;
          public          strphjhvqamiyv    false    225            ?            1259    27270142    rating_maps    TABLE     ]  CREATE TABLE public.rating_maps (
    id integer NOT NULL,
    rating_username character varying(255) NOT NULL,
    rating_type character varying(255) NOT NULL,
    rating_brand character varying(255) NOT NULL,
    rating_rate integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.rating_maps;
       public         heap    strphjhvqamiyv    false            ?            1259    27270148    rating_maps_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.rating_maps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.rating_maps_id_seq;
       public          strphjhvqamiyv    false    213            g           0    0    rating_maps_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.rating_maps_id_seq OWNED BY public.rating_maps.id;
          public          strphjhvqamiyv    false    214            ?            1259    27270150    ratings    TABLE     Y  CREATE TABLE public.ratings (
    id integer NOT NULL,
    rating_username character varying(255) NOT NULL,
    rating_type character varying(255) NOT NULL,
    rating_brand character varying(255) NOT NULL,
    rating_rate integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.ratings;
       public         heap    strphjhvqamiyv    false            ?            1259    27270156    ratings_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.ratings_id_seq;
       public          strphjhvqamiyv    false    215            h           0    0    ratings_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;
          public          strphjhvqamiyv    false    216            ?            1259    27270158    type_brands    TABLE     ?   CREATE TABLE public.type_brands (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "typeId" integer,
    "brandId" integer
);
    DROP TABLE public.type_brands;
       public         heap    strphjhvqamiyv    false            ?            1259    27270161    type_brands_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.type_brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.type_brands_id_seq;
       public          strphjhvqamiyv    false    217            i           0    0    type_brands_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.type_brands_id_seq OWNED BY public.type_brands.id;
          public          strphjhvqamiyv    false    218            ?            1259    27270163    types    TABLE     ?  CREATE TABLE public.types (
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
       public         heap    strphjhvqamiyv    false            ?            1259    27270172    types_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.types_id_seq;
       public          strphjhvqamiyv    false    219            j           0    0    types_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;
          public          strphjhvqamiyv    false    220            ?            1259    27270174    userdata    TABLE     ?  CREATE TABLE public.userdata (
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
       public         heap    strphjhvqamiyv    false            ?            1259    27270196    userdata_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.userdata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.userdata_id_seq;
       public          strphjhvqamiyv    false    221            k           0    0    userdata_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.userdata_id_seq OWNED BY public.userdata.id;
          public          strphjhvqamiyv    false    222            ?            1259    27270198    users    TABLE     '  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    strphjhvqamiyv    false            ?            1259    27270205    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          strphjhvqamiyv    false    223            l           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          strphjhvqamiyv    false    224            X           2604    27270207    basket_devices id    DEFAULT     v   ALTER TABLE ONLY public.basket_devices ALTER COLUMN id SET DEFAULT nextval('public.basket_devices_id_seq'::regclass);
 @   ALTER TABLE public.basket_devices ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    202    201            Y           2604    27270208 
   baskets id    DEFAULT     h   ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);
 9   ALTER TABLE public.baskets ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    204    203            \           2604    27270209 	   brands id    DEFAULT     f   ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);
 8   ALTER TABLE public.brands ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    206    205            ?           2604    27997780    chats id    DEFAULT     d   ALTER TABLE ONLY public.chats ALTER COLUMN id SET DEFAULT nextval('public.chats_id_seq'::regclass);
 7   ALTER TABLE public.chats ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    227    228    228            ]           2604    27270210    device_infos id    DEFAULT     r   ALTER TABLE ONLY public.device_infos ALTER COLUMN id SET DEFAULT nextval('public.device_infos_id_seq'::regclass);
 >   ALTER TABLE public.device_infos ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    208    207            d           2604    27270211 
   devices id    DEFAULT     h   ALTER TABLE ONLY public.devices ALTER COLUMN id SET DEFAULT nextval('public.devices_id_seq'::regclass);
 9   ALTER TABLE public.devices ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    210    209            g           2604    27270212 
   donates id    DEFAULT     h   ALTER TABLE ONLY public.donates ALTER COLUMN id SET DEFAULT nextval('public.donates_id_seq'::regclass);
 9   ALTER TABLE public.donates ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    212    211            ?           2604    27996881    one_on_ones id    DEFAULT     p   ALTER TABLE ONLY public.one_on_ones ALTER COLUMN id SET DEFAULT nextval('public.one_on_ones_id_seq'::regclass);
 =   ALTER TABLE public.one_on_ones ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    225    226    226            h           2604    27270213    rating_maps id    DEFAULT     p   ALTER TABLE ONLY public.rating_maps ALTER COLUMN id SET DEFAULT nextval('public.rating_maps_id_seq'::regclass);
 =   ALTER TABLE public.rating_maps ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    214    213            i           2604    27270214 
   ratings id    DEFAULT     h   ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);
 9   ALTER TABLE public.ratings ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    216    215            j           2604    27270215    type_brands id    DEFAULT     p   ALTER TABLE ONLY public.type_brands ALTER COLUMN id SET DEFAULT nextval('public.type_brands_id_seq'::regclass);
 =   ALTER TABLE public.type_brands ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    218    217            n           2604    27270216    types id    DEFAULT     d   ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);
 7   ALTER TABLE public.types ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    220    219                       2604    27270217    userdata id    DEFAULT     j   ALTER TABLE ONLY public.userdata ALTER COLUMN id SET DEFAULT nextval('public.userdata_id_seq'::regclass);
 :   ALTER TABLE public.userdata ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    222    221            ?           2604    27270218    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          strphjhvqamiyv    false    224    223            9          0    27270088    basket_devices 
   TABLE DATA           ^   COPY public.basket_devices (id, "createdAt", "updatedAt", "basketId", "deviceId") FROM stdin;
    public          strphjhvqamiyv    false    201   ?       ;          0    27270093    baskets 
   TABLE DATA           I   COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM stdin;
    public          strphjhvqamiyv    false    203   ,?       =          0    27270098    brands 
   TABLE DATA           v   COPY public.brands (id, name, "createdAt", "updatedAt", idname, amount, brand_payment, brand_description) FROM stdin;
    public          strphjhvqamiyv    false    205   I?       T          0    27997777    chats 
   TABLE DATA           V   COPY public.chats (id, username, message, date, "createdAt", "updatedAt") FROM stdin;
    public          strphjhvqamiyv    false    228   ??       ?          0    27270108    device_infos 
   TABLE DATA           d   COPY public.device_infos (id, title, description, "createdAt", "updatedAt", "deviceId") FROM stdin;
    public          strphjhvqamiyv    false    207   J?       A          0    27270116    devices 
   TABLE DATA           ?   COPY public.devices (id, "createdAt", "updatedAt", "userId", "userdatumId", "typeId", "brandId", dev_start, dev_username, dev_typename, dev_brandname, dev_billid, dev_amount) FROM stdin;
    public          strphjhvqamiyv    false    209   g?       C          0    27270130    donates 
   TABLE DATA           ?   COPY public.donates (id, amount, username, "billId", comment, status, "createdAt", "updatedAt", nametype, code_transaction, "brandName", brandid, typeid) FROM stdin;
    public          strphjhvqamiyv    false    211   B?       R          0    27996878    one_on_ones 
   TABLE DATA           ?   COPY public.one_on_ones (id, start_status, username, oppname, game, description, amount, "time", "userCheck", "oppCheck", "createdAt", "updatedAt") FROM stdin;
    public          strphjhvqamiyv    false    226   ?       E          0    27270142    rating_maps 
   TABLE DATA           |   COPY public.rating_maps (id, rating_username, rating_type, rating_brand, rating_rate, "createdAt", "updatedAt") FROM stdin;
    public          strphjhvqamiyv    false    213   ʱ       G          0    27270150    ratings 
   TABLE DATA           x   COPY public.ratings (id, rating_username, rating_type, rating_brand, rating_rate, "createdAt", "updatedAt") FROM stdin;
    public          strphjhvqamiyv    false    215   ??       I          0    27270158    type_brands 
   TABLE DATA           X   COPY public.type_brands (id, "createdAt", "updatedAt", "typeId", "brandId") FROM stdin;
    public          strphjhvqamiyv    false    217   ?       K          0    27270163    types 
   TABLE DATA           ?   COPY public.types (id, name, nametype, start, description, "createdAt", "updatedAt", amount, fund, grandprix, winner) FROM stdin;
    public          strphjhvqamiyv    false    219   !?       M          0    27270174    userdata 
   TABLE DATA           =  COPY public.userdata (id, username, rating, twitch, facebook, instagram, telegram, vk, ok, img, promo, bet, ban, ipreg, ip, ipin, "createdAt", "updatedAt", "userId", youtube, user_fund, "countWin", "countLoss", "promoCount", "dCyberbet", "dTypes", "dUsers", "pGame", "pFund", game, ratingcy, ratingcymap) FROM stdin;
    public          strphjhvqamiyv    false    221   ??       O          0    27270198    users 
   TABLE DATA           T   COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          strphjhvqamiyv    false    223   ??       m           0    0    basket_devices_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.basket_devices_id_seq', 1, false);
          public          strphjhvqamiyv    false    202            n           0    0    baskets_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.baskets_id_seq', 1, false);
          public          strphjhvqamiyv    false    204            o           0    0    brands_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.brands_id_seq', 44, true);
          public          strphjhvqamiyv    false    206            p           0    0    chats_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.chats_id_seq', 170, true);
          public          strphjhvqamiyv    false    227            q           0    0    device_infos_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.device_infos_id_seq', 1, false);
          public          strphjhvqamiyv    false    208            r           0    0    devices_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.devices_id_seq', 232, true);
          public          strphjhvqamiyv    false    210            s           0    0    donates_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.donates_id_seq', 335, true);
          public          strphjhvqamiyv    false    212            t           0    0    one_on_ones_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.one_on_ones_id_seq', 21, true);
          public          strphjhvqamiyv    false    225            u           0    0    rating_maps_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.rating_maps_id_seq', 11, true);
          public          strphjhvqamiyv    false    214            v           0    0    ratings_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.ratings_id_seq', 33, true);
          public          strphjhvqamiyv    false    216            w           0    0    type_brands_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.type_brands_id_seq', 1, false);
          public          strphjhvqamiyv    false    218            x           0    0    types_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.types_id_seq', 14, true);
          public          strphjhvqamiyv    false    220            y           0    0    userdata_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.userdata_id_seq', 51, true);
          public          strphjhvqamiyv    false    222            z           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 49, true);
          public          strphjhvqamiyv    false    224            ?           2606    27270224 "   basket_devices basket_devices_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT basket_devices_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.basket_devices DROP CONSTRAINT basket_devices_pkey;
       public            strphjhvqamiyv    false    201            ?           2606    27270226    baskets baskets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.baskets DROP CONSTRAINT baskets_pkey;
       public            strphjhvqamiyv    false    203            ?           2606    27270228    brands brands_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_pkey;
       public            strphjhvqamiyv    false    205            ?           2606    27997785    chats chats_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.chats DROP CONSTRAINT chats_pkey;
       public            strphjhvqamiyv    false    228            ?           2606    27270230    device_infos device_infos_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT device_infos_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.device_infos DROP CONSTRAINT device_infos_pkey;
       public            strphjhvqamiyv    false    207            ?           2606    27270232    devices devices_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.devices DROP CONSTRAINT devices_pkey;
       public            strphjhvqamiyv    false    209            ?           2606    27270234    donates donates_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.donates
    ADD CONSTRAINT donates_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.donates DROP CONSTRAINT donates_pkey;
       public            strphjhvqamiyv    false    211            ?           2606    27996890    one_on_ones one_on_ones_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.one_on_ones
    ADD CONSTRAINT one_on_ones_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.one_on_ones DROP CONSTRAINT one_on_ones_pkey;
       public            strphjhvqamiyv    false    226            ?           2606    27270236    rating_maps rating_maps_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.rating_maps
    ADD CONSTRAINT rating_maps_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.rating_maps DROP CONSTRAINT rating_maps_pkey;
       public            strphjhvqamiyv    false    213            ?           2606    27270238    ratings ratings_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.ratings DROP CONSTRAINT ratings_pkey;
       public            strphjhvqamiyv    false    215            ?           2606    27270240    type_brands type_brands_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT type_brands_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT type_brands_pkey;
       public            strphjhvqamiyv    false    217            ?           2606    27270242 *   type_brands type_brands_typeId_brandId_key 
   CONSTRAINT     v   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_brandId_key" UNIQUE ("typeId", "brandId");
 V   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT "type_brands_typeId_brandId_key";
       public            strphjhvqamiyv    false    217    217            ?           2606    27270244    types types_nametype_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_nametype_key UNIQUE (nametype);
 B   ALTER TABLE ONLY public.types DROP CONSTRAINT types_nametype_key;
       public            strphjhvqamiyv    false    219            ?           2606    27270246    types types_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.types DROP CONSTRAINT types_pkey;
       public            strphjhvqamiyv    false    219            ?           2606    27270248    userdata userdata_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.userdata DROP CONSTRAINT userdata_pkey;
       public            strphjhvqamiyv    false    221            ?           2606    27270250    userdata userdata_username_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_username_key UNIQUE (username);
 H   ALTER TABLE ONLY public.userdata DROP CONSTRAINT userdata_username_key;
       public            strphjhvqamiyv    false    221            ?           2606    27270252    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            strphjhvqamiyv    false    223            ?           2606    27270254    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            strphjhvqamiyv    false    223            ?           2606    27270255 +   basket_devices basket_devices_basketId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;
 W   ALTER TABLE ONLY public.basket_devices DROP CONSTRAINT "basket_devices_basketId_fkey";
       public          strphjhvqamiyv    false    201    203    3979            ?           2606    27270260 +   basket_devices basket_devices_deviceId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;
 W   ALTER TABLE ONLY public.basket_devices DROP CONSTRAINT "basket_devices_deviceId_fkey";
       public          strphjhvqamiyv    false    201    209    3985            ?           2606    27270265    baskets baskets_userId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.baskets DROP CONSTRAINT "baskets_userId_fkey";
       public          strphjhvqamiyv    false    223    203    4007            ?           2606    27270270 '   device_infos device_infos_deviceId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT "device_infos_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;
 S   ALTER TABLE ONLY public.device_infos DROP CONSTRAINT "device_infos_deviceId_fkey";
       public          strphjhvqamiyv    false    207    3985    209            ?           2606    27270275    devices devices_brandId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public.devices DROP CONSTRAINT "devices_brandId_fkey";
       public          strphjhvqamiyv    false    3981    205    209            ?           2606    27270280    devices devices_typeId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.devices DROP CONSTRAINT "devices_typeId_fkey";
       public          strphjhvqamiyv    false    209    219    3999            ?           2606    27270285    devices devices_userId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.devices DROP CONSTRAINT "devices_userId_fkey";
       public          strphjhvqamiyv    false    209    4007    223            ?           2606    27270290     devices devices_userdatumId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_userdatumId_fkey" FOREIGN KEY ("userdatumId") REFERENCES public.userdata(id) ON UPDATE CASCADE ON DELETE SET NULL;
 L   ALTER TABLE ONLY public.devices DROP CONSTRAINT "devices_userdatumId_fkey";
       public          strphjhvqamiyv    false    221    4001    209            ?           2606    27270295 $   type_brands type_brands_brandId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT "type_brands_brandId_fkey";
       public          strphjhvqamiyv    false    3981    217    205            ?           2606    27270300 #   type_brands type_brands_typeId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT "type_brands_typeId_fkey";
       public          strphjhvqamiyv    false    3999    217    219            ?           2606    27270305    userdata userdata_userId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT "userdata_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public.userdata DROP CONSTRAINT "userdata_userId_fkey";
       public          strphjhvqamiyv    false    223    4007    221            9      x?????? ? ?      ;      x?????? ? ?      =   9  x?}?KN?0E??*<?X??_<e? 6??
?D%BQ?n????p??qӗʙ??????Au????}?+?????2???o!u8?$C&????? F?I??a1?3???q?j1f???knU??^???v???#??v?????y???U?T>??f??ڑ:?m??~l?ʟ??JP?R???zЎO?????臩?e??ؒ??Ѭ?????2???⌟@}?????? ???r?U?(?[??VQ߹??_D??>;g?o??'h??;??Lϛ??%/-|???H????a0ej%"??T팈Jz?K?Z?j???      T   ?  x???ˮ$??ׇOq??D???x?Wp6	?Hf`'@???w??????Tu7??3??TdI")??}????|???7???;???}??????|]?Oq?k$????x?a????|?$?????ϟ?????P?X)!????w7?)
?D???x{U}?o?a??3P?$??ݵ?k]\PSĊ?5?2?4??????ܒ??H2?hFR5	#C???4g?ʎ?囑???? c?.?v?#[??Dݡ?kx܉???%%c'vd?Č?{??o?~?-???;2?`F??'???????¤?ߒ[j}\?]?ӕ?Qm)???'???H?t?|n?/9Y???DO???????w??9?wd,͌DO7?ݫ???VP?}????5-???<R??B4??(]#????ݻ˷?n1-z)?Q?F?????ǟ?-7???W??R??????}7Ƈq	f?????UC????۷_>??????????/??n|???ӣ?ix?ğ???˿?|?r:???mo??J3?1]#A????O?{s? ????????=
?H`?L4? ?g(??\#?i???????)?K?P?$????)?|[?}̽C?'?3_?[??M?$c???j?H|?????mȚԄķ+?kÎ??IpW?????H ?#??}!?.>????H?W?RL?w6???w$!\?n?f?fG?~ 	?J8??lO??D??Hu?>?#s ?Ғ?b?????%?g,w??I?HB!??A?yo ۆv"as?O???д??o???\?ʊ???Nu??1??`1?U?AO|tE?M??Nu?U????_??&?A?I ?Nn ?zj+?ZH?[,XK????H?:?Dj?3Ҩ?a~ޞY`?T^ ??T֪s??j5?b?z(???}ZHb<t)??Ru?P?R5?K?kkt???Nm?3???i??H斬?{C???Om??R
?5_??j{[v? ??&2??rj?^UL	?}?tn?9%?oI<C	?+?}EH????窣?S?ȁ$?I[?F?j??ۉ?W?9/??3?hȜ?b~??cm4V?J?x I:?j????b?6;?4?jt???@??0?],???[A???xi???;?&e9 ??X+?ܳ?"??LzF??w*c?_{8?F?Ҥ,???s?Pb??Z??T??H_ ISiŵ??Ҽ??sS?6U?|H?Fz?pix5"{n?R?m IS?HE???%?x??%??>?&??????H???D?s(R?H?^??/???$?_In?D??.?dR??1\h?R?K?yJά?7b/?N$?K??6???H2+?1HQo?w?/?d^-?A$?w?&?#??Jte+????$?K?$???/?@R?&????Py???>??????	2????????ތ??H
w?>?ļ?H?r )?11?y?֍dq??;'B|?I??A??J?L??4H??1???ŠJW????@R?ö~??M???%???낼???P?????i??c?Fd????{?Q???2?	?????ndv?&$ew??bZHZ?p????-????ǗQt???????~ʬ7D7l ???]?@?%?~4!???[???D2?YWOH?Tã\??aCR?f?e<X?L?????3?v?P?????
?b >??Mn*??6?j??;???{}?Z???9ꄤ?e|?͡*B!??????#fC\[ڦ?;?XJo???YSCDgF?y?ڑ?)?F???N:+5?S??XG?5v$??C?h??Z?/?g??{?	Ic9?:((}>?'???]????D?ϏW??H?E8? 31?9#v$m?!??S????]?fz8?L;?6??%\&??G	?y)Jl??K"???\}?S?`???LWҾ????38l	?OC?5???U??rCfWoB??p??+?5?Y[?:?x? ??u???H???D?aKn)??X?m?@?-ń????L$?z??<2?X쬤?=!QwP?3?2???싐???5ҋ?d_Ą?D	??٬XG%f?@?nw$????m??7D???+9???Q,??/dO?st???ǒ?|??$??A+??Q?W2;???#?G???kr?g?n?H??Mr???Ý??
?H???O?`6?&$?(?Y??X+A???H#???e??m?C?#e#3bjw$?Ϧd?"#
j!5???e?????S?<??<??׻Q+gֲh$2??b;	?q?_??l?#?l?X?x4F"SKZ?v??ݼ.?D????Y&$?x ?i1????=D?e?y??p??X?K? ?y????Ԅ ??Iݾ???
???+???Q܇?k????^i??C?1,Ȗ?ԝ7b/o[?,?1??蒈?3	??^_|?­??RH%ّ٬??MG?Ӥ1G??ye~?|??㧛ň??߬cVHU?]+O?#??l?N??y?h([??????7w4_>"???????pԄ?މ+?{??6?Bl?@?v6???4n??3􋒒?#?&;B?q?G?(ȼe?d?8?(?X?"IՁ??
	Fֶ}\a
?I ???4?TV???7??a?:???b]???`??7(fKs?­j??7???'ݒ???H4?n7N^??+???@?g?B?S?lJG?3w ?N??????ǖ՘V?̋???o!'???b?????װ?c????M?@???ĀWI?.Fp?9??X??#??n?CL??+b????xP?L%???D?g??????1?????wr?qFbҁD?N'???N??O?ӇZ???Ɏ??]??G????̫?	?}xO?H?v;b??? ;??P?Ջ⦻;?=k[?v;?9???68;ͯ??????#O?Ɂ?n:	z??gT????Z?0?ٿ????ѐ???c??ޱ???n ;a????m
9??HM??|	4m?????????o?>V?:??W???#??5??h80?58?FD?䐔I?\???R?HF?#?>?;?;???Q????鸭?D
??ؾSkvD?LB???K2N????̯"'u?TW2>䒬}?SPrr???@??8?Vp???r>{??>?nm????2l R????|?-?%???#??}??I??+???@???ҧ?_`U󃬏!H???i??L??^ ????i?gL,??????@6??O??5"?????l?3??j?H??#???|Z?9?~Y?mD?t?C?????\??????f?C<?????ϙÁ?????h&??S?d??O????҉??qi???#???|@?????Ete???<?zI??^      ?      x?????? ? ?      A   ?  x????n?@??????U?hfw?]n)??حS?i?G?,Spj?dp?5z?!o?G???q , n????7???#'FȐ?H????,)?u?t@* I?C?G?b?L	?~??Q????2?2?_wg?Y???3?e?Ý=?} ??B?#דd9\???h?? 9L??qgx|\?x??|48c???y~s˾H??u
[^???,?De?h?? ????i???3?}
q>~???M??e??e8??ّ?v?????9HH?t?A??EL8i0??1?܂.???Y:?e??c??f?` ?f???'Y?ԃ[?2?P????aLpU???6???@?x???x??????p?^?6;???Z?,{???{(?#/j??????i
?$???gi?·???]?~$??_?????,?=5?&???}-T??:?r???????$?o?C<Y]???s?d?S????S2????V??X?a-      C   ?  x????n?@???S????ݵ׾E&NB????2???)6!ɩR?=??G??k?䍺&?pT˒e??????c???a?H亱і?4bϧ???9?|?^??????~???Տ?w?SP???a????9?$?????G}??i]?D讥8jL??"	Ҥ????;?'I?`<?rj1????ʸ??6P?qM????'8T???a?ag?f?
?Ճ?,?X]???`y?9w?t?"???Z8?]L??x?'!~??,???64???`??A?ܢ??E~W-??b?Z E?
?b??OS?0ߜ?G?so*??pjSS3???>?WKl=???rW?	??^?rFq3 ~?p?8?H?Z??H??//_W??2Ǡ??h T??*q?R?7?=E??~8??9??Y޿¯??ީG?I???өʭ^|[XѦ04?$??!T?ݣvɞQ?ֻ?o?=wB??w|6$^>?????'??b?????l˞?je?LWxc}5??>???ҕA??q4J><?z????P???50??XW??37ס???˂??|?y8??|??Q:?o?W??u?BݠQ?JC`_ݺ??`??݄Ѧg???%n??Nf:?M?F:	v??4?py?vs2m&l`??[???9?oQ??L?S?=???}?ě???i??<??????y?b???%??%????T??Z??l?~      R   ?  x?}??N?@F??)ү?=wwhAB4H??6?$
?@[???)?fd???r?Ɍ???=oWOo/D?vs}w????????????^???????0e???a?7H3?????jOДTfu??ij??!????#??)???#??]??zt'??7?O+?u????;?u???#??????n//??=?$??٣;???2?~???N???[?G&.????s?>???p????7?j?RΞ?h?f??-?:??1?5???'??,n??K?똼<?8???T?2?İ27P??:ڙ1l??-T3j-??H]L?#l???Xk4?c??xMc?#@5???`F9??ΚqO ?,?Z?W^8I??m????????I?5xɲ??Cwb@@jm??L?~??q26v[1# ??|?sG??N???????g???4?B????O?Z??      E      x?????? ? ?      G      x?????? ? ?      I      x?????? ? ?      K   ?   x?}?1?@E??Slo???ev:cV	-M?8?7???FIHT0!d?i??y3Ċ??!f\rm?a??C?t?6%ի*?M??????*??
?hNS*'?Kb?jW?E??P???ٸ??Ǌ???!/>
?\ ?)<??????пܜ??* ?%w6 .?^A?1ޠ???7??~?3J?      M   ?  x????n?0?ϫ????zw?#?>ȹ??
(?TF?TUa?6??]??bڒ?H?Z????z??????WG????q?:?????3??ծ{???P?????-u&"؀???%,y?8?!S?1??F[?J?}@B&^g^R???`??>|!sM??9????{oK?c??ښ????9б??.g??Ӓ\???3R????d+ v<?V??cL????时?s?O??};?q?f???n}???3qt??h$?~?t?Xz??	R?U?1$?
????34???G?xW/?Ե????N?`??fǣYIf??Jk?g??-!??N??ͮi??v(?I?,?[?i*???_!???a??3??11??|?ci?4L?u??U?k~o??5?.???'?姾t?㡛?a}??<x?E??&\f2?4sW??(??]      O   ?  x?}?Ms?0?3|????&!	/'\D?*
??^@???B???;k???fr{?o?!B???w?i?K?*K?[??j?m?x?s????6???f 8٣lin?0??a?N??g??L?©.t?bԆj+OH?԰?~@???H?????7??r?VR?Ug????z??g5D??ܩ_6Icخ??????ݯF	>!??Adt???Dc?y??:eU???P|9?t??????Z??=	?S? ?q?3?v?J?N????h?~? ؆?	"M?a@???a$E?_??t??H?fWw???ޅk/.-?̆???#9??k?E??j~SO?o/QMB IW???H??(??.???o̭?l??????1?bc?8?噇?xo?k1???냈?G?????s?G"??$n+J篤?.?|\4 ???>??/?{T ?X?????um?W?KZ????J=?nW???'L#`U???E?/ ??L?ۯ     