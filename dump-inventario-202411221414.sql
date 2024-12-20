PGDMP     )                
    |         
   inventario    14.13 (Homebrew)    14.13 (Homebrew) &    _           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            `           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            a           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            b           1262    16384 
   inventario    DATABASE     U   CREATE DATABASE inventario WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE inventario;
                luis    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                luis    false            c           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   luis    false    3            �            1259    16461    bitacora    TABLE     �   CREATE TABLE public.bitacora (
    id integer NOT NULL,
    idperfil integer,
    fecha_movimiento timestamp without time zone
);
    DROP TABLE public.bitacora;
       public         heap    luis    false    3            �            1259    16460    bitacora_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bitacora_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.bitacora_id_seq;
       public          luis    false    216    3            d           0    0    bitacora_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.bitacora_id_seq OWNED BY public.bitacora.id;
          public          luis    false    215            �            1259    16407    estatus    TABLE     i   CREATE TABLE public.estatus (
    id integer NOT NULL,
    descripcion character varying(50) NOT NULL
);
    DROP TABLE public.estatus;
       public         heap    luis    false    3            �            1259    16406    estatus_id_seq    SEQUENCE     �   CREATE SEQUENCE public.estatus_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.estatus_id_seq;
       public          luis    false    212    3            e           0    0    estatus_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.estatus_id_seq OWNED BY public.estatus.id;
          public          luis    false    211            �            1259    16386    perfiles    TABLE     e   CREATE TABLE public.perfiles (
    id integer NOT NULL,
    perfil character varying(50) NOT NULL
);
    DROP TABLE public.perfiles;
       public         heap    luis    false    3            �            1259    16385    perfiles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.perfiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.perfiles_id_seq;
       public          luis    false    3    210            f           0    0    perfiles_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.perfiles_id_seq OWNED BY public.perfiles.id;
          public          luis    false    209            �            1259    16414    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    correo character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    perfil_id integer,
    estatus integer
);
    DROP TABLE public.usuarios;
       public         heap    luis    false    3            �            1259    16413    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          luis    false    214    3            g           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          luis    false    213            �           2604    16464    bitacora id    DEFAULT     j   ALTER TABLE ONLY public.bitacora ALTER COLUMN id SET DEFAULT nextval('public.bitacora_id_seq'::regclass);
 :   ALTER TABLE public.bitacora ALTER COLUMN id DROP DEFAULT;
       public          luis    false    216    215    216            �           2604    16410 
   estatus id    DEFAULT     h   ALTER TABLE ONLY public.estatus ALTER COLUMN id SET DEFAULT nextval('public.estatus_id_seq'::regclass);
 9   ALTER TABLE public.estatus ALTER COLUMN id DROP DEFAULT;
       public          luis    false    211    212    212            �           2604    16389    perfiles id    DEFAULT     j   ALTER TABLE ONLY public.perfiles ALTER COLUMN id SET DEFAULT nextval('public.perfiles_id_seq'::regclass);
 :   ALTER TABLE public.perfiles ALTER COLUMN id DROP DEFAULT;
       public          luis    false    209    210    210            �           2604    16417    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          luis    false    213    214    214            \          0    16461    bitacora 
   TABLE DATA           B   COPY public.bitacora (id, idperfil, fecha_movimiento) FROM stdin;
    public          luis    false    216   �&       X          0    16407    estatus 
   TABLE DATA           2   COPY public.estatus (id, descripcion) FROM stdin;
    public          luis    false    212   R'       V          0    16386    perfiles 
   TABLE DATA           .   COPY public.perfiles (id, perfil) FROM stdin;
    public          luis    false    210   ~'       Z          0    16414    usuarios 
   TABLE DATA           T   COPY public.usuarios (id, nombre, correo, password, perfil_id, estatus) FROM stdin;
    public          luis    false    214   �'       h           0    0    bitacora_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.bitacora_id_seq', 9, true);
          public          luis    false    215            i           0    0    estatus_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.estatus_id_seq', 2, true);
          public          luis    false    211            j           0    0    perfiles_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.perfiles_id_seq', 2, true);
          public          luis    false    209            k           0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 7, true);
          public          luis    false    213            �           2606    16466    bitacora bitacora_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT bitacora_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT bitacora_pkey;
       public            luis    false    216            �           2606    16412    estatus estatus_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.estatus
    ADD CONSTRAINT estatus_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.estatus DROP CONSTRAINT estatus_pkey;
       public            luis    false    212            �           2606    16391    perfiles perfiles_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.perfiles
    ADD CONSTRAINT perfiles_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.perfiles DROP CONSTRAINT perfiles_pkey;
       public            luis    false    210            �           2606    16421    usuarios usuarios_correo_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_correo_key UNIQUE (correo);
 F   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_correo_key;
       public            luis    false    214            �           2606    16419    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            luis    false    214            �           2606    16427    usuarios fk_estatus    FK CONSTRAINT     t   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT fk_estatus FOREIGN KEY (estatus) REFERENCES public.estatus(id);
 =   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT fk_estatus;
       public          luis    false    3520    212    214            �           2606    16422    usuarios fk_perfil    FK CONSTRAINT     v   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT fk_perfil FOREIGN KEY (perfil_id) REFERENCES public.perfiles(id);
 <   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT fk_perfil;
       public          luis    false    210    3518    214            �           2606    16467    bitacora fk_perfil    FK CONSTRAINT     u   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT fk_perfil FOREIGN KEY (idperfil) REFERENCES public.usuarios(id);
 <   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT fk_perfil;
       public          luis    false    216    3524    214            \   h   x�e��	�0��h�,�r�;�l����hjh�	��!$�|�1��m�&�l�7��RtĿ�VߐOO��v9��.7������]�B]^˩�����v�0o
SN�_ >�T&\      X      x�3�tL.�,��2���K�0c���� ^��      V   )   x�3�tL����,.)JL�/�2�tN,()-
$r��qqq �[
�      Z     x�]�Aj�0���:��IW���8��R��SK ����7�G�Ū���Z|f��Oa�]�ؒc�Q�Xs����0�UcQ��j-`�9ӽǗ\AI4�pNy�����xB�kN�Z@6���/r������/Fd�����1����Ӆￅ��)�سo_���w��2��+iKC�r9r	�;]�V<�D��Ъ��f��$[����`7C�%'�v�&��t�NMK����иZ�Ŏ�G
��P�SE�7���     