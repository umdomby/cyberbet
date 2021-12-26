--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5 (Ubuntu 13.5-2.pgdg20.04+1)
-- Dumped by pg_dump version 14.1 (Ubuntu 14.1-2.pgdg20.04+1)

-- Started on 2021-12-26 17:57:29 +03

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
-- TOC entry 2 (class 3079 OID 25691156)
-- Name: tsm_system_rows; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS tsm_system_rows WITH SCHEMA public;


--
-- TOC entry 4187 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION tsm_system_rows; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION tsm_system_rows IS 'TABLESAMPLE method which accepts number of rows as a limit';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 27270088)
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
-- TOC entry 202 (class 1259 OID 27270091)
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
-- TOC entry 4188 (class 0 OID 0)
-- Dependencies: 202
-- Name: basket_devices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.basket_devices_id_seq OWNED BY public.basket_devices.id;


--
-- TOC entry 203 (class 1259 OID 27270093)
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
-- TOC entry 204 (class 1259 OID 27270096)
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
-- TOC entry 4189 (class 0 OID 0)
-- Dependencies: 204
-- Name: baskets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;


--
-- TOC entry 205 (class 1259 OID 27270098)
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
-- TOC entry 206 (class 1259 OID 27270106)
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
-- TOC entry 4190 (class 0 OID 0)
-- Dependencies: 206
-- Name: brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;


--
-- TOC entry 228 (class 1259 OID 27997777)
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
-- TOC entry 227 (class 1259 OID 27997775)
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
-- TOC entry 4191 (class 0 OID 0)
-- Dependencies: 227
-- Name: chats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.chats_id_seq OWNED BY public.chats.id;


--
-- TOC entry 207 (class 1259 OID 27270108)
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
-- TOC entry 208 (class 1259 OID 27270114)
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
-- TOC entry 4192 (class 0 OID 0)
-- Dependencies: 208
-- Name: device_infos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.device_infos_id_seq OWNED BY public.device_infos.id;


--
-- TOC entry 209 (class 1259 OID 27270116)
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
-- TOC entry 210 (class 1259 OID 27270128)
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
-- TOC entry 4193 (class 0 OID 0)
-- Dependencies: 210
-- Name: devices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.devices_id_seq OWNED BY public.devices.id;


--
-- TOC entry 211 (class 1259 OID 27270130)
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
-- TOC entry 212 (class 1259 OID 27270138)
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
-- TOC entry 4194 (class 0 OID 0)
-- Dependencies: 212
-- Name: donates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.donates_id_seq OWNED BY public.donates.id;


--
-- TOC entry 226 (class 1259 OID 27996878)
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
-- TOC entry 225 (class 1259 OID 27996876)
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
-- TOC entry 4195 (class 0 OID 0)
-- Dependencies: 225
-- Name: one_on_ones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.one_on_ones_id_seq OWNED BY public.one_on_ones.id;


--
-- TOC entry 213 (class 1259 OID 27270142)
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
-- TOC entry 214 (class 1259 OID 27270148)
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
-- TOC entry 4196 (class 0 OID 0)
-- Dependencies: 214
-- Name: rating_maps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.rating_maps_id_seq OWNED BY public.rating_maps.id;


--
-- TOC entry 215 (class 1259 OID 27270150)
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
-- TOC entry 216 (class 1259 OID 27270156)
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
-- TOC entry 4197 (class 0 OID 0)
-- Dependencies: 216
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- TOC entry 217 (class 1259 OID 27270158)
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
-- TOC entry 218 (class 1259 OID 27270161)
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
-- TOC entry 4198 (class 0 OID 0)
-- Dependencies: 218
-- Name: type_brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.type_brands_id_seq OWNED BY public.type_brands.id;


--
-- TOC entry 219 (class 1259 OID 27270163)
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
-- TOC entry 220 (class 1259 OID 27270172)
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
-- TOC entry 4199 (class 0 OID 0)
-- Dependencies: 220
-- Name: types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;


--
-- TOC entry 221 (class 1259 OID 27270174)
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
-- TOC entry 222 (class 1259 OID 27270196)
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
-- TOC entry 4200 (class 0 OID 0)
-- Dependencies: 222
-- Name: userdata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.userdata_id_seq OWNED BY public.userdata.id;


--
-- TOC entry 223 (class 1259 OID 27270198)
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
-- TOC entry 224 (class 1259 OID 27270205)
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
-- TOC entry 4201 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: strphjhvqamiyv
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3928 (class 2604 OID 27270207)
-- Name: basket_devices id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.basket_devices ALTER COLUMN id SET DEFAULT nextval('public.basket_devices_id_seq'::regclass);


--
-- TOC entry 3929 (class 2604 OID 27270208)
-- Name: baskets id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);


--
-- TOC entry 3932 (class 2604 OID 27270209)
-- Name: brands id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);


--
-- TOC entry 3975 (class 2604 OID 27997780)
-- Name: chats id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.chats ALTER COLUMN id SET DEFAULT nextval('public.chats_id_seq'::regclass);


--
-- TOC entry 3933 (class 2604 OID 27270210)
-- Name: device_infos id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.device_infos ALTER COLUMN id SET DEFAULT nextval('public.device_infos_id_seq'::regclass);


--
-- TOC entry 3940 (class 2604 OID 27270211)
-- Name: devices id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices ALTER COLUMN id SET DEFAULT nextval('public.devices_id_seq'::regclass);


--
-- TOC entry 3943 (class 2604 OID 27270212)
-- Name: donates id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.donates ALTER COLUMN id SET DEFAULT nextval('public.donates_id_seq'::regclass);


--
-- TOC entry 3970 (class 2604 OID 27996881)
-- Name: one_on_ones id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.one_on_ones ALTER COLUMN id SET DEFAULT nextval('public.one_on_ones_id_seq'::regclass);


--
-- TOC entry 3944 (class 2604 OID 27270213)
-- Name: rating_maps id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.rating_maps ALTER COLUMN id SET DEFAULT nextval('public.rating_maps_id_seq'::regclass);


--
-- TOC entry 3945 (class 2604 OID 27270214)
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- TOC entry 3946 (class 2604 OID 27270215)
-- Name: type_brands id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.type_brands ALTER COLUMN id SET DEFAULT nextval('public.type_brands_id_seq'::regclass);


--
-- TOC entry 3950 (class 2604 OID 27270216)
-- Name: types id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);


--
-- TOC entry 3967 (class 2604 OID 27270217)
-- Name: userdata id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.userdata ALTER COLUMN id SET DEFAULT nextval('public.userdata_id_seq'::regclass);


--
-- TOC entry 3969 (class 2604 OID 27270218)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4153 (class 0 OID 27270088)
-- Dependencies: 201
-- Data for Name: basket_devices; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.basket_devices (id, "createdAt", "updatedAt", "basketId", "deviceId") FROM stdin;
\.


--
-- TOC entry 4155 (class 0 OID 27270093)
-- Dependencies: 203
-- Data for Name: baskets; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM stdin;
\.


--
-- TOC entry 4157 (class 0 OID 27270098)
-- Dependencies: 205
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.brands (id, name, "createdAt", "updatedAt", idname, amount, brand_payment, brand_description) FROM stdin;
36	mt_Jebus	2021-09-16 01:24:10.166+03	2021-09-16 01:24:10.166+03	10	0	0	16 8 2 : ОХ 117
38	6lm10a	2021-09-16 01:27:22.084+03	2021-09-16 01:27:22.084+03	10	0	0	16 8 1:15 : ОХ 115
39	spider	2021-09-16 01:27:34.285+03	2021-09-16 01:27:34.285+03	10	0	0	16 8 1:15 : ОХ 115
40	mini-Nosta	2021-09-16 01:28:28.831+03	2021-09-16 01:28:28.831+03	10	0	0	16 8 1:15 : ОХ 123
42	Jebus Cross	2021-09-28 13:02:27.888+03	2021-09-28 13:02:27.888+03	12	0	0	16 8 2 : ОХ 116
43	Jebus Outcast	2021-09-28 13:04:49.792+03	2021-09-28 13:04:49.792+03	12	0	0	16 8 2 : ОХ 116
37	Jebus Outcast	2021-09-16 01:27:04.263+03	2021-09-16 01:27:04.263+03	11	0	0	16 8 2 : ОХ 116
20	h3dm1	2021-08-02 00:08:10.646+03	2021-08-02 00:08:10.646+03	10	0	0	16 8 1:15 : ОХ 115
29	2sm4d(3)	2021-09-16 00:35:44.459+03	2021-09-16 00:35:44.459+03	10	0	0	16 6 1 : ОХ 115
41	Jebus Cross	2021-09-16 01:28:47.254+03	2021-09-16 01:28:47.254+03	11	0	200	16 8 2 : ОХ 116
15	Jebus Cross	2021-07-30 04:35:00.728+03	2021-07-30 04:35:00.728+03	10	10	0	16 8 2 : ОХ 116
\.


--
-- TOC entry 4180 (class 0 OID 27997777)
-- Dependencies: 228
-- Data for Name: chats; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.chats (id, username, message, date, "createdAt", "updatedAt") FROM stdin;
1	Denis22	123	2021-10-18 13:13:28.325+03	2021-10-18 13:13:28.328+03	2021-10-18 13:13:28.328+03
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
19	Denis22	ьь	2021-10-20 07:25:33.821+03	2021-10-20 07:25:33.83+03	2021-10-20 07:25:33.83+03
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


--
-- TOC entry 4159 (class 0 OID 27270108)
-- Dependencies: 207
-- Data for Name: device_infos; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.device_infos (id, title, description, "createdAt", "updatedAt", "deviceId") FROM stdin;
\.


--
-- TOC entry 4161 (class 0 OID 27270116)
-- Dependencies: 209
-- Data for Name: devices; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.devices (id, "createdAt", "updatedAt", "userId", "userdatumId", "typeId", "brandId", dev_start, dev_username, dev_typename, dev_brandname, dev_billid, dev_amount) FROM stdin;
230	2021-10-01 01:34:58.438+03	2021-10-01 01:34:58.438+03	46	48	11	41	t	steellllf1	JCJO	Jebus Cross	0cwTe0N-KF08FSv-5zw5Q5C	100
231	2021-10-01 14:17:41.624+03	2021-10-01 14:17:41.624+03	46	48	12	42	f	steellllf1	JCJO_FREE	Jebus Cross	zmbtSQT-QSAWtnv-L430Jyp	0
223	2021-10-01 01:34:18.283+03	2021-10-01 01:34:18.283+03	46	48	10	36	f	steellllf1	СНГ_2021	mt_Jebus	o7oM8rK-bKrdiCx-A9PgBYW	150
224	2021-10-01 01:34:18.289+03	2021-10-01 01:34:18.289+03	46	48	10	38	f	steellllf1	СНГ_2021	6lm10a	o7oM8rK-bKrdiCx-A9PgBYW	150
225	2021-10-01 01:34:18.293+03	2021-10-01 01:34:18.293+03	46	48	10	39	f	steellllf1	СНГ_2021	spider	o7oM8rK-bKrdiCx-A9PgBYW	150
226	2021-10-01 01:34:18.297+03	2021-10-01 01:34:18.297+03	46	48	10	40	f	steellllf1	СНГ_2021	mini-Nosta	o7oM8rK-bKrdiCx-A9PgBYW	150
227	2021-10-01 01:34:18.3+03	2021-10-01 01:34:18.3+03	46	48	10	20	f	steellllf1	СНГ_2021	h3dm1	o7oM8rK-bKrdiCx-A9PgBYW	150
228	2021-10-01 01:34:18.304+03	2021-10-01 01:34:18.304+03	46	48	10	29	f	steellllf1	СНГ_2021	2sm4d(3)	o7oM8rK-bKrdiCx-A9PgBYW	150
229	2021-10-01 01:34:18.308+03	2021-10-01 01:34:18.308+03	46	48	10	15	f	steellllf1	СНГ_2021	Jebus Cross	o7oM8rK-bKrdiCx-A9PgBYW	150
232	2021-10-05 14:22:04.298+03	2021-10-05 14:22:04.298+03	49	51	11	41	f	Roma1991	JCJO	Jebus Cross	ypkRaIb-XSVoXUb-CZ3fyNx	100
222	2021-09-30 16:20:20.086+03	2021-09-30 16:20:20.086+03	44	46	11	41	t	umdomby	JCJO	Jebus Cross	R0IugCY-FZ6sGp2-pklDokd	100
\.


--
-- TOC entry 4163 (class 0 OID 27270130)
-- Dependencies: 211
-- Data for Name: donates; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.donates (id, amount, username, "billId", comment, status, "createdAt", "updatedAt", nametype, code_transaction, "brandName", brandid, typeid) FROM stdin;
319	10	freeDom	FFl6R8X-eGDlSa0-UCZCjth	фонд СНГ 2021	t	2021-09-30 15:58:44.841762+03	2021-09-30 15:58:44.841762+03	СНГ_2021	7		\N	10
320	10	umdomby	w8SKrmd-m4cjp0X-H935Dsr	2021 JC	t	2021-09-30 16:10:34.521408+03	2021-09-30 16:10:34.521408+03	СНГ_2021	1	Jebus Cross	15	10
324	100	steellllf1	0cwTe0N-KF08FSv-5zw5Q5C	Fund to game steellllf1 СНГ_2021 h3dm1	t	2021-10-01 01:59:21.449027+03	2021-10-01 01:59:21.449027+03	steellllf1	4	Jebus Cross	41	11
323	250	steellllf1	FMaoo8d-eijTKlA-qZn8uhm		t	2021-10-01 01:40:07.657324+03	2021-10-01 01:40:07.657324+03	steellllf1	3		\N	\N
325	155	umdomby	mNChlJd-aivLuES-Y9wcxwQ	5 руб.	t	2021-10-04 18:48:31.15325+03	2021-10-04 18:48:31.15325+03	umdomby	3		\N	\N
326	150	cyberbet	8YptbM1-4OjwZHS-ikRSe1L	bonus +150	t	2021-10-05 13:40:56.438044+03	2021-10-05 13:40:56.438044+03	YAR	3		\N	\N
330	5	umdomby	7bNjSFk-xskSEIg-SR1WaND	+5	t	2021-10-12 19:59:46.663732+03	2021-10-12 19:59:46.663732+03	steellllf1	3		\N	\N
332	1	umdomby	OpixIq7-UMF8dlm-jihmvVz	+1	t	2021-10-13 06:56:14.161311+03	2021-10-13 06:56:14.161311+03	steellllf1	3		\N	\N
327	150	Roma1991	150150150150150	registration bonus +150руб.	t	2021-10-05 13:53:51.090868+03	2021-10-05 13:53:51.090868+03	Roma1991	3		\N	\N
333	100	umdomby	R0IugCY-FZ6sGp2-pklDokd	Fund to game JCJO Jebus Cross	t	2021-10-13 07:35:13.929037+03	2021-10-13 07:35:13.929037+03	umdomby	5	Jebus Cross	41	11
334	1	123	ilXfmad-SptuXHZ-3tln1g3	123	t	2021-11-03 01:01:45.980807+03	2021-11-03 01:01:45.980807+03	Roma1991	3		\N	\N
\.


--
-- TOC entry 4178 (class 0 OID 27996878)
-- Dependencies: 226
-- Data for Name: one_on_ones; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.one_on_ones (id, start_status, username, oppname, game, description, amount, "time", "userCheck", "oppCheck", "createdAt", "updatedAt") FROM stdin;
1	f	Denis22		HEROES HOTA	11	1	1	f	f	2021-10-18 05:39:28.893+03	2021-10-18 05:39:28.893+03
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


--
-- TOC entry 4165 (class 0 OID 27270142)
-- Dependencies: 213
-- Data for Name: rating_maps; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.rating_maps (id, rating_username, rating_type, rating_brand, rating_rate, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4167 (class 0 OID 27270150)
-- Dependencies: 215
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.ratings (id, rating_username, rating_type, rating_brand, rating_rate, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4169 (class 0 OID 27270158)
-- Dependencies: 217
-- Data for Name: type_brands; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.type_brands (id, "createdAt", "updatedAt", "typeId", "brandId") FROM stdin;
\.


--
-- TOC entry 4171 (class 0 OID 27270163)
-- Dependencies: 219
-- Data for Name: types; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.types (id, name, nametype, start, description, "createdAt", "updatedAt", amount, fund, grandprix, winner) FROM stdin;
12	2021-09-28 13:01:39.996+03	JCJO_FREE	f	HEROES HOTA	2021-09-28 13:01:39.996+03	2021-09-28 13:01:39.996+03	0	0	f	0
11	2021-09-27 13:41:48.020099+03	JCJO	f	HEROES HOTA	2021-07-25 16:30:24.611+03	2021-07-25 16:30:24.611+03	100	200	f	0
10	2021-09-16 15:59:26.336105+03	СНГ_2021	f	HEROES HOTA GP	2021-09-16 00:32:43.609+03	2021-09-16 00:32:43.609+03	150	10	t	10
\.


--
-- TOC entry 4173 (class 0 OID 27270174)
-- Dependencies: 221
-- Data for Name: userdata; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.userdata (id, username, rating, twitch, facebook, instagram, telegram, vk, ok, img, promo, bet, ban, ipreg, ip, ipin, "createdAt", "updatedAt", "userId", youtube, user_fund, "countWin", "countLoss", "promoCount", "dCyberbet", "dTypes", "dUsers", "pGame", "pFund", game, ratingcy, ratingcymap) FROM stdin;
46	umdomby	250	https://www.twitch.tv/robotavatar						\N	\N	1000	f	46.53.240.71	46.53.245.68	46.53.240.71;::1;::ffff:192.168.0.101;46.53.245.68	2021-09-28 13:10:23.868+03	2021-09-28 13:10:23.868+03	44		55	0	0	0	0	10	161	0	100	0	0	0
51	Roma1991	360	https://www.twitch.tv/Roma1991						\N	\N	1000	f	46.53.240.71	\N	46.53.240.71	2021-10-05 13:53:51.082+03	2021-10-05 13:53:51.082+03	49		151	0	0	0	0	0	150	0	0	0	0	0
48	steellllf1	170	https://www.twitch.tv/steellllf1						\N	\N	1000	f	46.53.245.163	46.216.113.109	46.53.245.163;46.216.113.109	2021-10-01 01:32:46.82+03	2021-10-01 01:32:46.82+03	46		256	0	0	0	0	0	250	100	0	0	0	0
49	YAR	444	https://www.twitch.tv/yar_				https://vk.com/yar_ki		\N	\N	1000	f	46.242.9.15	46.242.9.15	46.242.9.15	2021-10-02 01:46:45.306+03	2021-10-02 01:46:45.306+03	47		150	0	0	0	0	0	0	0	0	0	0	0
47	freeDom	150	https://www.twitch.tv/freedom22						\N	\N	1000	f	46.53.240.71	::ffff:192.168.0.101	46.53.240.71;::ffff:127.0.0.1;::1;46.53.240.23;::ffff:192.168.0.101	2021-09-30 11:42:06.732+03	2021-09-30 11:42:06.732+03	45		150	0	0	0	0	0	0	0	0	0	0	0
50	Denis22	150	https://www.twitch.tv/222						\N	\N	1000	f	46.53.240.71	46.53.242.7	46.53.240.71;::1;::ffff:192.168.0.100;::ffff:192.168.0.101;46.53.240.218;46.53.242.7	2021-10-05 13:35:31.138+03	2021-10-05 13:35:31.138+03	48		150	0	0	0	0	0	0	0	0	0	0	0
\.


--
-- TOC entry 4175 (class 0 OID 27270198)
-- Dependencies: 223
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: strphjhvqamiyv
--

COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
44	umdom2@gmail.com	$2b$05$xKEhgtjLiRVzzVofDPsRo.awKLoYGgqbjepJr6wrMCocL75pM8e5C	ADMIN	2021-09-28 13:10:23.856+03	2021-09-28 13:10:23.856+03
45	umdom22@gmail.com	$2b$05$REGow1uq85u3rUuze0KkWOdk2h/9b1TrUaRQVtylyDKRCY3bu6OJy	USER	2021-09-30 11:42:06.716+03	2021-09-30 11:42:06.716+03
46	steellll@tut.by	$2b$05$V2hMmQYmm.rSRQxCeUKPbeMuV.jBeD2koCtaM6sIt0Eaw1thVjsIW	USER	2021-10-01 01:32:46.809+03	2021-10-01 01:32:46.809+03
48	222	$2b$05$pyQLF43YyixAau6wyeA0de0lUjtI7uHSJ8VRcMDlsedRIVrEPyK9q	USER	2021-10-05 13:35:31.13+03	2021-10-05 13:35:31.13+03
49	umdom22222@gmail.com	$2b$05$erfjZ6RxT6PoeZAKhmn2eujDP9D2l77SU2ljkGGHIXLSq4MNCHhee	USER	2021-10-05 13:53:51.065+03	2021-10-05 13:53:51.065+03
47	lj-88@mail.ru	$2b$05$qNry.1iXwSkhQ7oer1vhr.58Ifq6BgBdxGNc2u.Y5xtbG6vX8xToW	USER	2021-10-02 01:46:45.297+03	2021-10-02 01:46:45.297+03
\.


--
-- TOC entry 4202 (class 0 OID 0)
-- Dependencies: 202
-- Name: basket_devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.basket_devices_id_seq', 1, false);


--
-- TOC entry 4203 (class 0 OID 0)
-- Dependencies: 204
-- Name: baskets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.baskets_id_seq', 1, false);


--
-- TOC entry 4204 (class 0 OID 0)
-- Dependencies: 206
-- Name: brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.brands_id_seq', 44, true);


--
-- TOC entry 4205 (class 0 OID 0)
-- Dependencies: 227
-- Name: chats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.chats_id_seq', 170, true);


--
-- TOC entry 4206 (class 0 OID 0)
-- Dependencies: 208
-- Name: device_infos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.device_infos_id_seq', 1, false);


--
-- TOC entry 4207 (class 0 OID 0)
-- Dependencies: 210
-- Name: devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.devices_id_seq', 232, true);


--
-- TOC entry 4208 (class 0 OID 0)
-- Dependencies: 212
-- Name: donates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.donates_id_seq', 335, true);


--
-- TOC entry 4209 (class 0 OID 0)
-- Dependencies: 225
-- Name: one_on_ones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.one_on_ones_id_seq', 21, true);


--
-- TOC entry 4210 (class 0 OID 0)
-- Dependencies: 214
-- Name: rating_maps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.rating_maps_id_seq', 11, true);


--
-- TOC entry 4211 (class 0 OID 0)
-- Dependencies: 216
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.ratings_id_seq', 33, true);


--
-- TOC entry 4212 (class 0 OID 0)
-- Dependencies: 218
-- Name: type_brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.type_brands_id_seq', 1, false);


--
-- TOC entry 4213 (class 0 OID 0)
-- Dependencies: 220
-- Name: types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.types_id_seq', 14, true);


--
-- TOC entry 4214 (class 0 OID 0)
-- Dependencies: 222
-- Name: userdata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.userdata_id_seq', 51, true);


--
-- TOC entry 4215 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: strphjhvqamiyv
--

SELECT pg_catalog.setval('public.users_id_seq', 49, true);


--
-- TOC entry 3977 (class 2606 OID 27270224)
-- Name: basket_devices basket_devices_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT basket_devices_pkey PRIMARY KEY (id);


--
-- TOC entry 3979 (class 2606 OID 27270226)
-- Name: baskets baskets_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);


--
-- TOC entry 3981 (class 2606 OID 27270228)
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);


--
-- TOC entry 4011 (class 2606 OID 27997785)
-- Name: chats chats_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY (id);


--
-- TOC entry 3983 (class 2606 OID 27270230)
-- Name: device_infos device_infos_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT device_infos_pkey PRIMARY KEY (id);


--
-- TOC entry 3985 (class 2606 OID 27270232)
-- Name: devices devices_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_pkey PRIMARY KEY (id);


--
-- TOC entry 3987 (class 2606 OID 27270234)
-- Name: donates donates_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.donates
    ADD CONSTRAINT donates_pkey PRIMARY KEY (id);


--
-- TOC entry 4009 (class 2606 OID 27996890)
-- Name: one_on_ones one_on_ones_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.one_on_ones
    ADD CONSTRAINT one_on_ones_pkey PRIMARY KEY (id);


--
-- TOC entry 3989 (class 2606 OID 27270236)
-- Name: rating_maps rating_maps_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.rating_maps
    ADD CONSTRAINT rating_maps_pkey PRIMARY KEY (id);


--
-- TOC entry 3991 (class 2606 OID 27270238)
-- Name: ratings ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- TOC entry 3993 (class 2606 OID 27270240)
-- Name: type_brands type_brands_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT type_brands_pkey PRIMARY KEY (id);


--
-- TOC entry 3995 (class 2606 OID 27270242)
-- Name: type_brands type_brands_typeId_brandId_key; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_brandId_key" UNIQUE ("typeId", "brandId");


--
-- TOC entry 3997 (class 2606 OID 27270244)
-- Name: types types_nametype_key; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_nametype_key UNIQUE (nametype);


--
-- TOC entry 3999 (class 2606 OID 27270246)
-- Name: types types_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);


--
-- TOC entry 4001 (class 2606 OID 27270248)
-- Name: userdata userdata_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_pkey PRIMARY KEY (id);


--
-- TOC entry 4003 (class 2606 OID 27270250)
-- Name: userdata userdata_username_key; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_username_key UNIQUE (username);


--
-- TOC entry 4005 (class 2606 OID 27270252)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4007 (class 2606 OID 27270254)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4012 (class 2606 OID 27270255)
-- Name: basket_devices basket_devices_basketId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4013 (class 2606 OID 27270260)
-- Name: basket_devices basket_devices_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4014 (class 2606 OID 27270265)
-- Name: baskets baskets_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4015 (class 2606 OID 27270270)
-- Name: device_infos device_infos_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT "device_infos_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4016 (class 2606 OID 27270275)
-- Name: devices devices_brandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4017 (class 2606 OID 27270280)
-- Name: devices devices_typeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4018 (class 2606 OID 27270285)
-- Name: devices devices_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4019 (class 2606 OID 27270290)
-- Name: devices devices_userdatumId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_userdatumId_fkey" FOREIGN KEY ("userdatumId") REFERENCES public.userdata(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4020 (class 2606 OID 27270295)
-- Name: type_brands type_brands_brandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4021 (class 2606 OID 27270300)
-- Name: type_brands type_brands_typeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4022 (class 2606 OID 27270305)
-- Name: userdata userdata_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: strphjhvqamiyv
--

ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT "userdata_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4186 (class 0 OID 0)
-- Dependencies: 719
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO strphjhvqamiyv;


-- Completed on 2021-12-26 17:57:53 +03

--
-- PostgreSQL database dump complete
--

