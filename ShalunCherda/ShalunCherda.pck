GDPC                                                                                <   res://.import/1.png-e03fa9c4d787ff8aebcb0d3cc6a7bce6.stex   �#      r      y,2�YhyQbd�P}�<   res://.import/2.png-01309d012bed3adfd0121dc5247bbba8.stex   �*      l      �ö�(�in�:!��<   res://.import/3.png-f9c99cd1957ce2569f3608bc85ca2acb.stex   p1      V      ��N���r��TL�j<   res://.import/4.png-c3ac0e9c2119490698502bb68a1e5c53.stex   P8      �      �*y�/ĲR�_ٓ����<   res://.import/5.png-bf7576ff9e6c8b11fc2963a8468502ec.stex   `?      |      ��b���>��j�os<   res://.import/6.png-1c75144a861f82a6ed87eb5297277b7a.stex   `F      l      C��l��4�#�M�����<   res://.import/VSE.png-4a263819d02faf407e97ad1b7e8bf246.stex PM      1       �z2 ����������<   res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex`      �      �p��<f��r�g��.�   res://Players.gd.remap   \      "       Mn0�SGE��L8�b�F0   res://Players.gdc   �      A      ���߀�ȼ��Ĥ�   res://Players.tscn        �      o�a�+��9�VӠ�   res://World.tscn�      �      S^���Ԝܮ,�9�M�   res://default_env.tres  �      �       K��+fr��s����   res://icon.png  P\      i      ����󈘥Ey��
�   res://icon.png.import    !      �      �����%��(#AB�   res://pic/1.png.import   (      {      �}��v�3qd&�   res://pic/2.png.import  �.      {      �!̴,���/�	�w�   res://pic/3.png.import  �5      {      .�\5����w;1@�I   res://pic/4.png.import  �<      {      a��@I2�\=�z�b   res://pic/5.png.import  �C      {      ����1�b��   res://pic/6.png.import  �J      {      #�hNjOV��
�q��v   res://pic/VSE.png.import�Y      �      ��h�H���a��e��>i   res://project.binary�i      �      MX��۴%�{�|����GDSC            �      ������������τ�   ����򶶶   ����䶶�   �������   ���������䶶   �������϶���   ���������������Ŷ���   ����׶��   �������ض���   ϶��   ����¶��   ����������������Ҷ��   ζ��   �������������Ӷ�   �����޶�   ���϶���   ����������Ķ   �������������Ӷ�   �                   �     �              ui_right            run       ui_left              idle      ui_up                                                    %   	   &   
   -      5      ;      D      J      Q      Y      b      i      p      x      {      �      �      �      �      �      �      �      3YY:�  Y:�  �  P�  R�  QY:�  �  Y:�  �  YY;�  �  PQYY0�  P�  QV�  &�  T�	  �  V�  �  T�	  �  �  &�
  T�  P�  QV�  �  T�  �  �  W�  T�  �  �  W�  T�  P�  Q�  '�
  T�  P�	  QV�  �  T�  �  �  W�  T�  �
  �  W�  T�  P�  Q�  (V�  �  T�  �  �  W�  T�  P�  QY�  &�
  T�  P�  Q�  PQV�  �  T�	  �  �  �  �  T�	  P�  �  Q�  �  �  P�  R�  Q`               [gd_scene load_steps=10 format=2]

[ext_resource path="res://Players.gd" type="Script" id=1]
[ext_resource path="res://pic/3.png" type="Texture" id=2]
[ext_resource path="res://pic/1.png" type="Texture" id=3]
[ext_resource path="res://pic/2.png" type="Texture" id=4]
[ext_resource path="res://pic/4.png" type="Texture" id=5]
[ext_resource path="res://pic/5.png" type="Texture" id=6]
[ext_resource path="res://pic/6.png" type="Texture" id=7]

[sub_resource type="SpriteFrames" id=1]
animations = [ {
"frames": [ ExtResource( 2 ) ],
"loop": true,
"name": "idle",
"speed": 5.0
}, {
"frames": [ ExtResource( 3 ), ExtResource( 4 ), ExtResource( 2 ), ExtResource( 5 ), ExtResource( 6 ), ExtResource( 7 ) ],
"loop": true,
"name": "run",
"speed": 15.0
} ]

[sub_resource type="CapsuleShape2D" id=2]
radius = 11.5102
height = 13.6369

[node name="Players" type="KinematicBody2D"]
script = ExtResource( 1 )

[node name="AnimatedSprite" type="AnimatedSprite" parent="."]
scale = Vector2( 2, 2 )
frames = SubResource( 1 )
animation = "run"
frame = 1

[node name="CollisionShape2D" type="CollisionShape2D" parent="."]
position = Vector2( 2.62237, 8.21676 )
scale = Vector2( 2, 2 )
shape = SubResource( 2 )

      [gd_scene load_steps=4 format=2]

[ext_resource path="res://Players.tscn" type="PackedScene" id=1]
[ext_resource path="res://icon.png" type="Texture" id=2]

[sub_resource type="RectangleShape2D" id=1]
extents = Vector2( 32.3946, 32.1376 )

[node name="World" type="Node2D"]

[node name="Players" parent="." instance=ExtResource( 1 )]
position = Vector2( 451, 290 )

[node name="StaticBody2D" type="StaticBody2D" parent="."]

[node name="CollisionShape2D" type="CollisionShape2D" parent="StaticBody2D"]
position = Vector2( 480.5, 359 )
scale = Vector2( 12.6719, 1 )
shape = SubResource( 1 )

[node name="icon" type="Sprite" parent="StaticBody2D"]
position = Vector2( 480.5, 359 )
scale = Vector2( 12.6719, 1 )
texture = ExtResource( 2 )

               [gd_resource type="Environment" load_steps=2 format=2]

[sub_resource type="ProceduralSky" id=1]

[resource]
background_mode = 2
background_sky = SubResource( 1 )

            GDST@   @           |  PNG �PNG

   IHDR   @   @   �iq�  ?IDATx��{pTU�����;�N7	�����%"fyN�8��r\]fEgةf���X�g��F�Y@Wp\]|,�D@��	$$���	��I�n���ҝt����JW�s��}�=���|�D(���W@T0^����f��	��q!��!i��7�C���V�P4}! ���t�ŀx��dB.��x^��x�ɏN��贚�E�2�Z�R�EP(�6�<0dYF���}^Ѡ�,	�3=�_<��(P&�
tF3j�Q���Q�B�7�3�D�@�G�U��ĠU=� �M2!*��[�ACT(�&�@0hUO�u��U�O�J��^FT(Qit �V!>%���9 J���jv	�R�@&��g���t�5S��A��R��OO^vz�u�L�2�����lM��>tH
�R6��������dk��=b�K�љ�]�י�F*W�볃�\m=�13� �Є,�ˏy��Ic��&G��k�t�M��/Q]�أ]Q^6o��r�h����Lʳpw���,�,���)��O{�:א=]� :LF�[�*���'/���^�d�Pqw�>>��k��G�g���No���\��r����/���q�̾��	�G��O���t%L�:`Ƶww�+���}��ݾ ۿ��SeŔ����  �b⾻ǰ��<n_�G��/��8�Σ�l]z/3��g����sB��tm�tjvw�:��5���l~�O���v��]ǚ��֩=�H	u���54�:�{"������}k����d���^��`�6�ev�#Q$�ήǞ��[�Ặ�e�e��Hqo{�59i˲����O+��e������4�u�r��z�q~8c
 �G���7vr��tZ5�X�7����_qQc�[����uR��?/���+d��x�>r2����P6����`�k��,7�8�ɿ��O<Ė��}AM�E%�;�SI�BF���}��@P�yK�@��_:����R{��C_���9������
M��~����i����������s���������6�,�c�������q�����`����9���W�pXW]���:�n�aұt~9�[���~e�;��f���G���v0ԣ� ݈���y�,��:j%gox�T
�����kְ�����%<��A`���Jk?���� gm���x�*o4����o��.�����逊i�L����>���-���c�����5L����i�}�����4����usB������67��}����Z�ȶ�)+����)+H#ۢ�RK�AW�xww%��5�lfC�A���bP�lf��5����>���`0ċ/oA-�,�]ĝ�$�峋P2/���`���;����[Y��.&�Y�QlM���ƌb+��,�s�[��S ��}<;���]�:��y��1>'�AMm����7q���RY%9)���ȡI�]>�_l�C����-z�� ;>�-g�dt5іT�Aͺy�2w9���d�T��J�}u�}���X�Ks���<@��t��ebL������w�aw�N����c����F���3
�2먭�e���PQ�s�`��m<1u8�3�#����XMڈe�3�yb�p�m��܇+��x�%O?CmM-Yf��(�K�h�بU1%?I�X�r��� ��n^y�U�����1�玒�6..e��RJrRz�Oc������ʫ��]9���ZV�\�$IL�OŨ��{��M�p�L56��Wy��J�R{���FDA@
��^�y�������l6���{�=��ή�V�hM�V���JK��:��\�+��@�l/���ʧ����pQ��������׷Q^^�(�T������|.���9�?I�M���>���5�f欙X�VƎ-f͚ո���9����=�m���Y���c��Z�̚5��k~���gHHR�Ls/l9²���+ ����:��杧��"9�@��ad�ŝ��ѽ�Y���]O�W_�`Ֆ#Դ8�z��5-N^�r�Z����h���ʆY���=�`�M���Ty�l���.	�/z��fH���������֗�H�9�f������G� ̛<��q��|�]>ں}�N�3�;i�r"�(2RtY���4X���F�
�����8 �[�\锰�b`�0s�:���v���2�f��k�Zp��Ω&G���=��6em.mN�o.u�fԐc��i����C���u=~{�����a^�UH������¡,�t(jy�Q�ɋ����5�Gaw��/�Kv?�|K��(��SF�h�����V��xȩ2St쯹���{6b�M/�t��@0�{�Ԫ�"�v7�Q�A�(�ľR�<	�w�H1D�|8�]�]�Ո%����jҢ꯸hs�"~꯸P�B�� �%I}}��+f�����O�cg�3rd���P�������qIڻ]�h�c9��xh )z5��� �ƾ"1:3���j���'1;��#U�失g���0I}�u3.)@�Q�A�ĠQ`I�`�(1h��t*�:�>'��&v��!I?�/.)@�S�%q�\���l�TWq�������լ�G�5zy6w��[��5�r���L`�^���/x}�>��t4���cݦ�(�H�g��C�EA�g�)�Hfݦ��5�;q-���?ư�4�����K����XQ*�av�F��������񵏷�;>��l�\F��Þs�c�hL�5�G�c�������=q�P����E �.���'��8Us�{Ǎ���#������q�HDA`b��%����F�hog���|�������]K�n��UJ�}������Dk��g��8q���&G����A�RP�e�$'�i��I3j�w8������?�G�&<	&䪬R��lb1�J����B$�9�꤮�ES���[�������8�]��I�B!
�T
L:5�����d���K30"-	�(��D5�v��#U�����jԔ�QR�GIaó�I3�nJVk���&'��q����ux��AP<�"�Q�����H�`Jң�jP(D��]�����`0��+�p�inm�r�)��,^�_�rI�,��H>?M-44���x���"� �H�T��zIty����^B�.��%9?E����П�($@H!�D��#m�e���vB(��t �2.��8!���s2Tʡ �N;>w'����dq�"�2����O�9$�P	<(��z�Ff�<�z�N��/yD�t�/?�B.��A��>��i%�ǋ"�p n� ���]~!�W�J���a�q!n��V X*�c �TJT*%�6�<d[�    IEND�B`�        [remap]

importer="texture"
type="StreamTexture"
path="res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://icon.png"
dest_files=[ "res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
GDST0   0           V  PNG �PNG

   IHDR   0   0   W��  IDATh��OhU�?�$����ti(�n V۴���ŋTAl��R/^�RA<x�R������ň��ڤIb,k��Y&M6���xx�^gvgf�ϛԀ_2��y�������~C�m��d�s�	����6v��N�/|����/�>����?L5�0���C� ��B��P�(�~��D�HK^!w���cR�@�n��;YK@|�6q�>��D��C>	����]_��i�Caԁ�Ǯ��憍�I��B�;�/�ի�'�i�s���W
H���{h�����-�n#!�9j����t� %y�fw��@�H���P��`KF�f��Xo3i����z��c�hL}kR�xr� V�	h-03g#��=`R� xn}ʦ?�ס] �/�R����_-��A�.����0�� ��tk��s�/�Bc�˶<���[����蘾�-W~`p���c?�>�� ��G\���/�ǇX�� �|�Q��ۻ��D��5Ehr����7��~���BK�S-	�Zk1��b��7���R^�+��ؙd�������V,�����^)�R�ۀ=Z|y&�s!�rkF"���#�0��~X:����<��WE�����Qf�g �n�|��V�4�v�GWs߈��?���[�Xs�<�<����N`Z?�S7 �R�ei�V���,�D��}{�߫����dm���Z!LY���'�٤Q/�g��KEF��E8n)"���/��R	�'����[�3S	W�9�n{E��S�"L`�4�@�`\���7P��U��bn�*�Nt��u���}�2�LJ�w�^��>�[Ǉ�[�
�G^�u�n�3!ai�)b_qPG��#�0�}1������R^ (!$ȅ�Vdn ��G<j볁c�Njڅ�����D�]�=b���B_خ*3��{�ߦ����2P�7�xN�\��#/&�/qM,���:񱺵� �k�4yW���(5�.� O?��px��8d|?qZ��38���CPcOq�G]߃L
�s��"��?52M%&ϵ���N��5�L �Aᵝ�    IEND�B`�              [remap]

importer="texture"
type="StreamTexture"
path="res://.import/1.png-e03fa9c4d787ff8aebcb0d3cc6a7bce6.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://pic/1.png"
dest_files=[ "res://.import/1.png-e03fa9c4d787ff8aebcb0d3cc6a7bce6.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
     GDST0   0           P  PNG �PNG

   IHDR   0   0   W��  IDATh�՘KlE�Ӥy8�!�l�Q�n���E\('.� ��u.�_ 		 q�ĥ�3o)�!=	)�JU�&�R�n�B�q�M��4{g^o�1�i��ٙ�������>)%2��oI�����DO��o������. 
�8��K'?�m�9�k�oD��5Ѝ|��&`7�"3�m��+6��hy��v3�܉� �,-2c~�I�O��!��9W�Ȍ!u����ށX�<��Ķm��f��JK��Z_�E4Q�XHC@ yٸ88� �O�a��큠�g}��׾۱l���gɜ�>"����}���-/�N�['�0�>5&	�����Z�V��E�Why�p�  ^ޜ���z����/�}�;�0gB��o-� ������CL?} ��
s�Ts�/�	�nb����i�w�XiJݏZ�͍ƚ�[i�X�q�f/�i� ���e��+����FO	�D�Y�E��[_03_�xw��a����5�O~�@2��d<�Bu��c�9&��J6:3_�?��\3]�gg�d�m�V�\2J�-�_ �_������~䗪k�ᗕ�L�<�#7:�U����
���>V��,��j27}���~2v�zcѷo�(9B)<t
pY������z��A �'�� w{!RK�+����rه�����Z���f��ޫA�E��.�xq�f�Pώӗ���#��?�Df����Α�{���X��N`��;^��:_�끑��V=&

�T�9'N���J���J!*K��zv��U�F�S��#(�N����ꛋ��z���u /y�+,Of�l��#r��K��0rj':p(���w��`������!1a�\c#�\�a�nU���������rY������Q���!քqJʀd@�9w����ν�Y�ڝ3�ƽG_U����B�a���/�[	���m	��YU��
 ��I� �� /<����� ��XN���83�QP?��Ȼ�Ah݅�n|��i������^m�^$�z.d���桨����ߡ�;    IEND�B`�    [remap]

importer="texture"
type="StreamTexture"
path="res://.import/2.png-01309d012bed3adfd0121dc5247bbba8.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://pic/2.png"
dest_files=[ "res://.import/2.png-01309d012bed3adfd0121dc5247bbba8.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
     GDST0   0           :  PNG �PNG

   IHDR   0   0   W��  �IDATh��OlTE�?c�H�ЅE�I�!�F��Ƌ�z�?'4�x�`b�􂞼�.\D�7I�	'1=�AS�$���Mj�Z�J��*�Bk���۾?��̲��M^��̼��w~���o�RJd<�i��!�N�!�N��t��?�[�ݯS��ݛ�4�x�d2Zp��1	��|7V{#L���@�4*Ҏ)	D1>D��TD�F���� �+-�EA�H��<��k�RH��� !�oA�׀Be��	�����i��!��z� ��R��5�!���X��^��ZS���ױ����\�6zzS��l���^H�h}��ҥ�I�x���?��js�Vf�#��I��)�@H�'w0�[����=.�Q��j�=��6.<s ���c-[ �nI5��p/�+��+ d�wbUkd�M�Dz�>�뢄�����p�J�>��L�(��gc������}��-���*!77{��w�pi:�{itIX՚�5ֲ��o�>���IM ڔ�^��1_��P�jS���<�]ynM@���h�Ȕ��3�>��e����S\��=Ϯ �/4����b�	f+�v�fl2mͅ�(�~����.��=���a��KM%ܳp��i��µ��w����N����O5֠mM�J?R��/�*�yn�PtI):Ly�3��rWٻ'Ovp���v�߄f/�C[<p�������yG��$a˨3���7�t.*��d3�9�� #sw<'1h:�D�����F���0N��Wk8��U��hn~���h軶�|��̙Z�bO!�#��g��W�ဟ�B�U���	AK�����}Y�-s��v���h�|ZI���t���S��rQWl#�~�@�En���h|x��۔�f��r(����hu*K��O~�f���up{���ՊE"G�S_��W,�S3���А�� Q�ĉ�R
Ѱ�ı/�[M@I�_ۓ���.�$�!����	�  ���y�8�4U$����E��˟���4���|jW��    IEND�B`�          [remap]

importer="texture"
type="StreamTexture"
path="res://.import/3.png-f9c99cd1957ce2569f3608bc85ca2acb.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://pic/3.png"
dest_files=[ "res://.import/3.png-f9c99cd1957ce2569f3608bc85ca2acb.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
     GDST0   0           m  PNG �PNG

   IHDR   0   0   W��  0IDATh��OhU�?�&k���OIR�Rfťn�X=�6=x�=�"B*^,��% T<�ҋR/�xT��"��P/+(��d�d�-�4�ݴ��n�x�y�����ٙ�]
����{o����������
]�y��H�	��C��C�F��	_~gֵ��?�]��KʞP�F�ȃ� ��B��P3�~������S" ,y�ȱW�~'��A~�
�A��@�C	�C�%�� KHP���4��ʎտ�|�a�<��Сy��+;P���)�脀��ͯo��`���Șj��ƀ$+$!�@����ܼ�6�]F�хZ� �
��U@����sv�{�Ʊ�J>Rgɸ�g�Е��4z��1����d�{��Z5t�  ^���3�d��0 3K%a�eT�f��@�j�������s�P.�S.���iQ]��-�J���Q�$߈�ǭ��1����`Ø��af�l;�܈K|���D� "'�[M�߿i�Z�#奋s�K��º#�}!d-ޙ��/[^b�tqγ�\r��l�1q�X��w[���o�n":R���g#���4t̥c���m��$����7�E���g��y�S;SĞ�c1�`�T��BGK	I^�a ���G���4F�gy�������K�IKȸ�FjMh	�o�g�ў1�)��8�3���k �V��eƿ$�W����u�ЖU����s�ERSR�  ��Y'�%Xɮ�m�c�0�#~$�H�1�JMe�X�����Б_%�~�F��Yϲ�����47�ZH�.�#_I��� �]xpl�Q���l`����;�>���7n^PU�m��j��>��H�qd,JV���ca1�t3�\�ǫ�S�q�ŧ ���m>��`� /�J�u-�G��Zu�����~�u����N��!�
 �R
���5����HN�dh@�p�}b�>1�ЀFr�$8�
�6_��y ���s#����Y�4��F-� ��_Z�Z��{��Z�����Ҧ7B!T5�1M��L�d�回}'�'�o/��?/�:}�!�l���W�V�?�^^�
�����a��b~��ߎ�    IEND�B`�       [remap]

importer="texture"
type="StreamTexture"
path="res://.import/4.png-c3ac0e9c2119490698502bb68a1e5c53.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://pic/4.png"
dest_files=[ "res://.import/4.png-c3ac0e9c2119490698502bb68a1e5c53.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
     GDST0   0           `  PNG �PNG

   IHDR   0   0   W��  #IDATh��OlE�Kb�&i����FV����!����?	�RAq)q��s,�^�"ܨ��*!Q�C9������RPcB�6Nˡu�C�;^{w���݄J�����g���y��6���x`�	��}[����Q��7N���kٵ�祐B�gDF�ȃ� �B"s�n�����oj��D@X��c/Z�򢣸w�/�E���~Ȼ��%�P&y�F�W����Ð�¨	�#�h�����f	�a����՗HlW�u�z�������BA�A-c`����mS��΅z�IA"	!��&hY��
qE�.� ���:E�7�-J��5�S�cG��e�I#��S�1����h�2[����!�=� ��;e�`�^��`�Zh��&@�fC���?o��cw�W���W� �j		5g$$q'�(��K �2;�Wk��)%�B��T[��=�-��<�{C�����
~�hG��?���oƭ�H8S�R��ׅ�b�ж������L���tqѨWk��W���O��S��?�K�� g��W�^ik8;�#�+�­)h����X��1_YQ�->ʹ�oy|u�܁4�j�.W^򇘭̚���ĚY�-H-2�U7ҟa�?>�	����8��I~�`�Z��[��گ�},�S4i��\i�{J��� ��������/�\�?���c��d��_���U���|��V�X,p��u���z����s�{�0�hk6��/oW��"�N��ܮÌ���H�%l�����y}�ح%"p��5�\�^��hn~��ŮcM�ru�d.�Ml�˧U$z��_ ���$��7DC�K֙��niu�72KD�@��k+�9�p_u3 �6+�㇟Ϋஸ���m�:��N�-`�|խZ�t�5�v��@�����3��^�2�M|�Wܪ���!W��ݪؑL��@L'�I^�E��,:X4����U��q�Ц܉m0>��U0����oT����{�#���L�џT�oV�p�;�edb�	�B �o~�m���Bh��lŁw���n�<����y,f��    IEND�B`�    [remap]

importer="texture"
type="StreamTexture"
path="res://.import/5.png-bf7576ff9e6c8b11fc2963a8468502ec.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://pic/5.png"
dest_files=[ "res://.import/5.png-bf7576ff9e6c8b11fc2963a8468502ec.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
     GDST0   0           P  PNG �PNG

   IHDR   0   0   W��  IDATh��OhU�?c�k�I�t�d1,e[Xl��Eɥ�`UJ�'/�S���7O�A���
Vr�Iт�h�m�1���N�n�n�xx3ogw���y���/�yo޼���~�7��h�a�0�~W� ��G �֠����Y��o~Yqm�g�X�i*Ө���`)*���3>��y'�8% q����z-��� �7:���M <D�M�x�ط 4�`E�L�ޫ]ߒ�q���QS�g���m�'���5�\}��^yT��@��jn�� �"{ �KKK��g; �F3A�w!�E�H$��x�e��L	�X�U��0 ��	�l�z�JH�5�ՀcWc��P�*���)nTny�fY-_��Ƞ`�� ^��b0�s�S�����xP쁹'`�F]��?���3��+"|����H�9� Ýz�P��ߏ^��Τ%8A�O��}��?�:wl /����^9}����ݺ�d�Y"t�����!d��+�N���r)��{qrS�+5�k���G_�	"}
�C�QM z�"3.�����.�u�/��ȱqkZv�Й)���.2��Uy���Q.��-�nM�;�Z}7����V˫f�Nh���B��DKZJd�B� ������	JK	���}�F�ظ޾���W쟔���jҞsš�)% �'E��87n!_��Rp��c��e�8t0Gfx�<^�.Y�ߦv/�SO<���&�z^^�߼kw�B�aԟM��{e-��Hg��:w`��������'p:}�^�5 �TJ9��϶�j!�R�5���˓�cͰr�bN�&��32}p� �"܌׌����w����j�_dD�p���U>��p_u3i �U�H���%Y�7nʎ=�D�}��N`y�Zg����7}�Vr�\:O���ݾ�"�����yW��#\��E[c*9*�o�+h7�,�6?�� �9�h[��P��ʰH%G�'�c�=r~��"�7q, Ms�n[=_���W_B� D�E�{@��V�{�)�M�[J(���݁WtG�    IEND�B`�    [remap]

importer="texture"
type="StreamTexture"
path="res://.import/6.png-1c75144a861f82a6ed87eb5297277b7a.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://pic/6.png"
dest_files=[ "res://.import/6.png-1c75144a861f82a6ed87eb5297277b7a.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
     GDST   0             PNG �PNG

   IHDR      0   �"��  �IDATx��_l�ǿ[l��`��"g�lP+��>�R˃i+U� ���D��*D} UDj�T��P*j�<�6mDS�i� U)5	Q[p�Q���:�`c��w��7�����gwf���N����}~���o~�;��麎\��ۺ;���O�$W��Q�l �&񨠯�}����y��Ӂ�'�Za�U�&���I]Uk�~����!�rc�����ïB?����3���"/ܴ�w���YQ�U�(vYm�_v����K@�� Z�J�K:�,'N@ݦo
�����E���X�Ig��N(`�]J(?��	�T�%�?���� t@Xiܝ�C��Xa�����K3��\{�Pv��;�+k�n��O��X	H�(
?MB��!k��Ŕ�hU� �ꗓ��%!y�k��u ���=�y(�BJ�?���U� ���U+� �̅^��ݯ<[(�|�μT�P:y���J*Uw�FEn ��+�$?��  �K��iR��p���@��I$��� I^�;�����* ?�dC�bɇ���_��/t|�F��W�Ӱ
Ư��.����v�����L5���3z��JHT�\E1�`K�V��⯭��Nv5���������ױ-���,'�E@m��?WV���X~�P U0�5� ���P\�(VQ�Y9�3�����SM@U� �Լ13F�j��#}S4̓��27���PUM�� g���j(8�y�3�� ��/q�~�g�"0�8���p���W�7�ɛ.[�p�x	L�;��8�]~C�_�i���I�o�����f��gTb��I(� Zx� �	(o Xo`�����t�\2�8<��%8��O  ��F�6;= xŴ#UF/E�g����0��cHh$j
�l1��z��� ��֕���ASs�p�!��B��%oMS����BP\܂8Tu[w'b�; ���A�ϐ�� �	��8�<��g����K���q�e��>q ��k�m���K�m�>��H~�  ���o(.�{B|�$vtqK_�Lc�x�`ѣ@~��u��q-���=�mG���㎆����K�/y��xGc����M��b�#O������vtMh��3^����,R��+��,l������Rl�I?=܆��Z<�v����@;�W�c�� ���A�A�U�B��D��w3�ؙ2�����	�w4�@�����Dw:�-5FY;�`2�5B��~�8M��3��n��m�{о����2r�2�/�8��8�Hǀ� F�3�.��ؙ2��q��`�����qb�\E��+��n�L��(�y��NdJ���ʋ����zga#�E�te�2���f�b�����~}e)�y�v�� I�� �X�e��| 06b����pvz�<�X W����z)�݀�� ����b lof�1�����muK���w��`��?�e�ߗ;*������)��m�@�� 0}o ��V���b��mб�͍���[�}J����fQ5���P�<��H�<���a�Y����F_�0?\���a��A�v�ErZu�O�_Td1`��9�K��]��ցT
� �zi��c��M�f��=�zh�o�l��_7z׷���������卢�{����na����ߜ�A+��p^����B�=�5�ۓ���Ь<���I�Y��=����[�6�AJ� �
`�
�E��n�C�>�M~���z���w8�U��@��m��K���������Y���a��D� �2�'��/����㗟
��EdI*
+O=�� Q�l�V9_��?d�_T_���Sj	���	�w���^�%%�v��� �^�_���E�?Wte��I�O@G_��=;��\�O/_ �ѫc���Ş��QF� ��������خ4���`��{�_Y�����;r�^�ه p����o�;�v�¿n�.P�y�Yswm}�\/s����W ���Σ�����f��L�?��b����pU��(M~Q����L�$�ohF��n ���%?#�����O.����`~��e �A���@��W����+8rԨt��u#  ��Jh��/�_�� ��֕�3�F\�+�#�B�9#�r���=�]��>N7,����W4  �Aߗ\ ic7(��_c�oYvT0������S67Q�����2 � -
;#&BO�~�C�p�8�๯��w�ߺW��V4��Ђ�����%��:�P�(�o���������ql�χ���  s�@�]�����~@>��t�������/#�h � �ݺW�Gw�-/��$�y�.�����`����.I��n�+��S� ��I�����/�=�6r�O}�j�S%�6)�{O���%��M������W�����8���d�f��������`F0g� &���<#���t;�� qn�T������m��X�v^ ']��%Q��Ö�,6�)�Gg"	��}%��|�8��k��V~����96����mr�wQ����: : ��}�l��B# ���x��B�� �	\����}l�O�v�%� 	��3I��DnIhp��	�k�ɦ�	(� �
ޭk�SF2���[��+8��I
�S���ϧ�y[��$$2~E& ��5�-�7쒜�<�Y�-��׊S�JH?�_8(;��o�%+���ܫ�h0��ٷ��h�� `���)�[���ޥYċc��+r��<,��M>��U�+?+f@�UD����'��_��Ӽ����.�d����׏���8�����J0HbP@B EO���~��ܫ)0s��Dj��,�XYD��8�1
��o�!��/������W_�]U����U\Р��,0�Z�J���d+ �Y��+�$�t�Gb�d��Q�QR�y!b�/S��i$^U���A~>�b?�RR}(��ʕ+W�6��[�?0    IEND�B`�               [remap]

importer="texture"
type="StreamTexture"
path="res://.import/VSE.png-4a263819d02faf407e97ad1b7e8bf246.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://pic/VSE.png"
dest_files=[ "res://.import/VSE.png-4a263819d02faf407e97ad1b7e8bf246.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
               [remap]

path="res://Players.gdc"
              �PNG

   IHDR   @   @   �iq�  0IDATx��}pTU����L����W�$�@HA�%"fa��Yw�)��A��Egةf���X�g˱��tQ���Eq�!�|K�@BHH:�t>�;�����1!ݝn�A�_UWw����{λ��sϽO�q汤��X,�q�z�<�q{cG.;��]�_�`9s��|o���:��1�E�V� ~=�	��ݮ����g[N�u�5$M��NI��-
�"(U*��@��"oqdYF�y�x�N�e�2���s����KҦ`L��Z)=,�Z}"
�A�n{�A@%$��R���F@�$m������[��H���"�VoD��v����Kw�d��v	�D�$>	�J��;�<�()P�� �F��
�< �R����&�կ��� ����������%�u̚VLNfڠus2�̚VL�~�>���mOMJ���J'R��������X����׬X�Ϲ虾��6Pq������j���S?�1@gL���±����(�2A�l��h��õm��Nb�l_�U���+����_����p�)9&&e)�0 �2{��������1���@LG�A��+���d�W|x�2-����Fk7�2x��y,_�_��}z��rzy��%n�-]l����L��;
�s���:��1�sL0�ڳ���X����m_]���BJ��im�  �d��I��Pq���N'�����lYz7�����}1�sL��v�UIX���<��Ó3���}���nvk)[����+bj�[���k�������cݮ��4t:= $h�4w:qz|A��٧�XSt�zn{�&��õmQ���+�^�j�*��S��e���o�V,	��q=Y�)hԪ��F5~����h�4 *�T�o��R���z�o)��W�]�Sm銺#�Qm�]�c�����v��JO��?D��B v|z�կ��܈�'�z6?[� ���p�X<-���o%�32����Ρz�>��5�BYX2���ʦ�b��>ǣ������SI,�6���|���iXYQ���U�҅e�9ma��:d`�iO����{��|��~����!+��Ϧ�u�n��7���t>�l捊Z�7�nвta�Z���Ae:��F���g�.~����_y^���K�5��.2�Zt*�{ܔ���G��6�Y����|%�M	���NPV.]��P���3�8g���COTy�� ����AP({�>�"/��g�0��<^��K���V����ϫ�zG�3K��k���t����)�������6���a�5��62Mq����oeJ�R�4�q�%|�� ������z���ä�>���0�T,��ǩ�����"lݰ���<��fT����IrX>� � ��K��q�}4���ʋo�dJ��م�X�sؘ]hfJ�����Ŧ�A�Gm߽�g����YG��X0u$�Y�u*jZl|p������*�Jd~qcR�����λ�.�
�r�4���zپ;��AD�eЪU��R�:��I���@�.��&3}l
o�坃7��ZX��O�� 2v����3��O���j�t	�W�0�n5����#è����%?}����`9۶n���7"!�uf��A�l܈�>��[�2��r��b�O�������gg�E��PyX�Q2-7���ʕ������p��+���~f��;����T	�*�(+q@���f��ϫ����ѓ���a��U�\.��&��}�=dd'�p�l�e@y��
r�����zDA@����9�:��8�Y,�����=�l�֮��F|kM�R��GJK��*�V_k+��P�,N.�9��K~~~�HYY��O��k���Q�����|rss�����1��ILN��~�YDV��-s�lfB֬Y�#.�=�>���G\k֬fB�f3��?��k~���f�IR�lS'�m>²9y���+ �v��y��M;NlF���A���w���w�b���Л�j�d��#T��b���e��[l<��(Z�D�NMC���k|Zi�������Ɗl��@�1��v��Щ�!曣�n��S������<@̠7�w�4X�D<A`�ԑ�ML����jw���c��8��ES��X��������ƤS�~�׾�%n�@��( Zm\�raҩ���x��_���n�n���2&d(�6�,8^o�TcG���3���emv7m6g.w��W�e
�h���|��Wy��~���̽�!c� �ݟO�)|�6#?�%�,O֫9y������w��{r�2e��7Dl �ׇB�2�@���ĬD4J)�&�$
�HԲ��
/�߹�m��<JF'!�>���S��PJ"V5!�A�(��F>SD�ۻ�$�B/>lΞ�.Ϭ�?p�l6h�D��+v�l�+v$Q�B0ūz����aԩh�|9�p����cƄ,��=Z�����������Dc��,P��� $ƩЩ�]��o+�F$p�|uM���8R��L�0�@e'���M�]^��jt*:��)^�N�@�V`�*�js�up��X�n���tt{�t:�����\�]>�n/W�\|q.x��0���D-���T��7G5jzi���[��4�r���Ij������p�=a�G�5���ͺ��S���/��#�B�EA�s�)HO`���U�/QM���cdz
�,�!�(���g�m+<R��?�-`�4^}�#>�<��mp��Op{�,[<��iz^�s�cü-�;���쾱d����xk瞨eH)��x@���h�ɪZNU_��cxx�hƤ�cwzi�p]��Q��cbɽcx��t�����M|�����x�=S�N���
Ͽ�Ee3HL�����gg,���NecG�S_ѠQJf(�Jd�4R�j��6�|�6��s<Q��N0&Ge
��Ʌ��,ᮢ$I�痹�j���Nc���'�N�n�=>|~�G��2�)�D�R U���&ՠ!#1���S�D��Ǘ'��ೃT��E�7��F��(?�����s��F��pC�Z�:�m�p�l-'�j9QU��:��a3@0�*%�#�)&�q�i�H��1�'��vv���q8]t�4����j��t-}IـxY�����C}c��-�"?Z�o�8�4Ⱦ���J]/�v�g���Cȷ2]�.�Ǣ ��Ս�{0
�>/^W7�_�����mV铲�
i���FR��$>��}^��dُ�۵�����%��*C�'�x�d9��v�ߏ � ���ۣ�Wg=N�n�~������/�}�_��M��[���uR�N���(E�	� ������z��~���.m9w����c����
�?���{�    IEND�B`�       ECFG      _global_script_classes             _global_script_class_icons             application/config/name         ShalunCherda   application/run/main_scene         res://World.tscn   application/config/icon         res://icon.png     display/window/size/width            display/window/size/height      �  )   rendering/environment/default_environment          res://default_env.tres  GDPC