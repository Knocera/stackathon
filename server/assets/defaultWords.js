const codenames = [
	{
		id: 'aa',
		codename: 'AFRICA'
	},
	{
		id: 'ab',
		codename: 'AGENT'
	},
	{
		id: 'ac',
		codename: 'AIR'
	},
	{
		id: 'ad',
		codename: 'ALIEN'
	},
	{
		id: 'ae',
		codename: 'ALPS'
	},
	{
		id: 'af',
		codename: 'AMAZON'
	},
	{
		id: 'ag',
		codename: 'AMBULANCE'
	},
	{
		id: 'ah',
		codename: 'AMERICA'
	},
	{
		id: 'ai',
		codename: 'ANGEL'
	},
	{
		id: 'aj',
		codename: 'ANTARCTICA'
	},
	{
		id: 'ak',
		codename: 'APPLE'
	},
	{
		id: 'al',
		codename: 'ARM'
	},
	{
		id: 'am',
		codename: 'ATLANTIS'
	},
	{
		id: 'an',
		codename: 'AUSTRALIA'
	},
	{
		id: 'ao',
		codename: 'AZTEC'
	},
	{
		id: 'ap',
		codename: 'BACK'
	},
	{
		id: 'aq',
		codename: 'BALL'
	},
	{
		id: 'ar',
		codename: 'BAND'
	},
	{
		id: 'as',
		codename: 'BANK'
	},
	{
		id: 'at',
		codename: 'BAR'
	},
	{
		id: 'au',
		codename: 'BARK'
	},
	{
		id: 'av',
		codename: 'BAT'
	},
	{
		id: 'aw',
		codename: 'BATTERY'
	},
	{
		id: 'ax',
		codename: 'BEACH'
	},
	{
		id: 'ay',
		codename: 'BEAR'
	},
	{
		id: 'az',
		codename: 'BEAT'
	},
	{
		id: 'ba',
		codename: 'BED'
	},
	{
		id: 'bb',
		codename: 'BEIJING'
	},
	{
		id: 'bc',
		codename: 'BELL'
	},
	{
		id: 'bd',
		codename: 'BELT'
	},
	{
		id: 'be',
		codename: 'BERLIN'
	},
	{
		id: 'bf',
		codename: 'BERMUDA'
	},
	{
		id: 'bg',
		codename: 'BERRY'
	},
	{
		id: 'bh',
		codename: 'BILL'
	},
	{
		id: 'bi',
		codename: 'BLOCK'
	},
	{
		id: 'bj',
		codename: 'BOARD'
	},
	{
		id: 'bk',
		codename: 'BOLT'
	},
	{
		id: 'bl',
		codename: 'BOMB'
	},
	{
		id: 'bm',
		codename: 'BOND'
	},
	{
		id: 'bn',
		codename: 'BOOM'
	},
	{
		id: 'bo',
		codename: 'BOOT'
	},
	{
		id: 'bp',
		codename: 'BOTTLE'
	},
	{
		id: 'bq',
		codename: 'BOW'
	},
	{
		id: 'br',
		codename: 'BOX'
	},
	{
		id: 'bs',
		codename: 'BRIDGE'
	},
	{
		id: 'bt',
		codename: 'BRUSH'
	},
	{
		id: 'bu',
		codename: 'BUCK'
	},
	{
		id: 'bv',
		codename: 'BUFFALO'
	},
	{
		id: 'bw',
		codename: 'BUG'
	},
	{
		id: 'bx',
		codename: 'BUGLE'
	},
	{
		id: 'by',
		codename: 'BUTTON'
	},
	{
		id: 'bz',
		codename: 'CALF'
	},
	{
		id: 'ca',
		codename: 'CANADA'
	},
	{
		id: 'cb',
		codename: 'CAP'
	},
	{
		id: 'cc',
		codename: 'CAPITAL'
	},
	{
		id: 'cd',
		codename: 'CAR'
	},
	{
		id: 'ce',
		codename: 'CARD'
	},
	{
		id: 'cf',
		codename: 'CARROT'
	},
	{
		id: 'cg',
		codename: 'CASINO'
	},
	{
		id: 'ch',
		codename: 'CAST'
	},
	{
		id: 'ci',
		codename: 'CAT'
	},
	{
		id: 'cj',
		codename: 'CELL'
	},
	{
		id: 'ck',
		codename: 'CENTAUR'
	},
	{
		id: 'cl',
		codename: 'CENTER'
	},
	{
		id: 'cm',
		codename: 'CHAIR'
	},
	{
		id: 'cn',
		codename: 'CHANGE'
	},
	{
		id: 'co',
		codename: 'CHARGE'
	},
	{
		id: 'cp',
		codename: 'CHECK'
	},
	{
		id: 'cq',
		codename: 'CHEST'
	},
	{
		id: 'cr',
		codename: 'CHICK'
	},
	{
		id: 'cs',
		codename: 'CHINA'
	},
	{
		id: 'ct',
		codename: 'CHOCOLATE'
	},
	{
		id: 'cu',
		codename: 'CHURCH'
	},
	{
		id: 'cv',
		codename: 'CIRCLE'
	},
	{
		id: 'cw',
		codename: 'CLIFF'
	},
	{
		id: 'cx',
		codename: 'CLOAK'
	},
	{
		id: 'cy',
		codename: 'CLUB'
	},
	{
		id: 'cz',
		codename: 'CODE'
	},
	{
		id: 'da',
		codename: 'COLD'
	},
	{
		id: 'db',
		codename: 'COMIC'
	},
	{
		id: 'dc',
		codename: 'COMPOUND'
	},
	{
		id: 'dd',
		codename: 'CONCERT'
	},
	{
		id: 'de',
		codename: 'CONDUCTOR'
	},
	{
		id: 'df',
		codename: 'CONTRACT'
	},
	{
		id: 'dg',
		codename: 'COOK'
	},
	{
		id: 'dh',
		codename: 'COPPER'
	},
	{
		id: 'di',
		codename: 'COTTON'
	},
	{
		id: 'dj',
		codename: 'COURT'
	},
	{
		id: 'dk',
		codename: 'COVER'
	},
	{
		id: 'dl',
		codename: 'CRANE'
	},
	{
		id: 'dm',
		codename: 'CRASH'
	},
	{
		id: 'dn',
		codename: 'CRICKET'
	},
	{
		id: 'do',
		codename: 'CROSS'
	},
	{
		id: 'dp',
		codename: 'CROWN'
	},
	{
		id: 'dq',
		codename: 'CYCLE'
	},
	{
		id: 'dr',
		codename: 'CZECH'
	},
	{
		id: 'ds',
		codename: 'DANCE'
	},
	{
		id: 'dt',
		codename: 'DATE'
	},
	{
		id: 'du',
		codename: 'DAY'
	},
	{
		id: 'dv',
		codename: 'DEATH'
	},
	{
		id: 'dw',
		codename: 'DECK'
	},
	{
		id: 'dx',
		codename: 'DEGREE'
	},
	{
		id: 'dy',
		codename: 'DIAMOND'
	},
	{
		id: 'dz',
		codename: 'DICE'
	},
	{
		id: 'ea',
		codename: 'DINOSAUR'
	},
	{
		id: 'eb',
		codename: 'DISEASE'
	},
	{
		id: 'ec',
		codename: 'DOCTOR'
	},
	{
		id: 'ed',
		codename: 'DOG'
	},
	{
		id: 'ee',
		codename: 'DRAFT'
	},
	{
		id: 'ef',
		codename: 'DRAGON'
	},
	{
		id: 'eh',
		codename: 'DRESS'
	},
	{
		id: 'ei',
		codename: 'DRILL'
	},
	{
		id: 'ej',
		codename: 'DROP'
	},
	{
		id: 'ek',
		codename: 'DUCK'
	},
	{
		id: 'el',
		codename: 'DWARF'
	},
	{
		id: 'em',
		codename: 'EAGLE'
	},
	{
		id: 'en',
		codename: 'EGYPT'
	},
	{
		id: 'eo',
		codename: 'EMBASSY'
	},
	{
		id: 'ep',
		codename: 'ENGINE'
	},
	{
		id: 'eq',
		codename: 'ENGLAND'
	},
	{
		id: 'er',
		codename: 'EUROPE'
	},
	{
		id: 'es',
		codename: 'EYE'
	},
	{
		id: 'et',
		codename: 'FACE'
	},
	{
		id: 'eu',
		codename: 'FAIR'
	},
	{
		id: 'ev',
		codename: 'FALL'
	},
	{
		id: 'ew',
		codename: 'FAN'
	},
	{
		id: 'ex',
		codename: 'FENCE'
	},
	{
		id: 'ey',
		codename: 'FIELD'
	},
	{
		id: 'ez',
		codename: 'FIGHTER'
	},
	{
		id: 'fa',
		codename: 'FIGURE'
	},
	{
		id: 'fb',
		codename: 'FILE'
	},
	{
		id: 'fc',
		codename: 'FILM'
	},
	{
		id: 'fd',
		codename: 'FIRE'
	},
	{
		id: 'fe',
		codename: 'FISH'
	},
	{
		id: 'ff',
		codename: 'FLUTE'
	},
	{
		id: 'fg',
		codename: 'FLY'
	},
	{
		id: 'fh',
		codename: 'FOOT'
	},
	{
		id: 'fi',
		codename: 'FORCE'
	},
	{
		id: 'fj',
		codename: 'FOREST'
	},
	{
		id: 'fk',
		codename: 'FORK'
	},
	{
		id: 'fl',
		codename: 'FRANCE'
	},
	{
		id: 'fm',
		codename: 'GAME'
	},
	{
		id: 'fn',
		codename: 'GAS'
	},
	{
		id: 'fo',
		codename: 'GENIUS'
	},
	{
		id: 'fp',
		codename: 'GERMANY'
	},
	{
		id: 'fq',
		codename: 'GHOST'
	},
	{
		id: 'fr',
		codename: 'GIANT'
	},
	{
		id: 'fs',
		codename: 'GLASS'
	},
	{
		id: 'ft',
		codename: 'GLOVE'
	},
	{
		id: 'fu',
		codename: 'GOLD'
	},
	{
		id: 'fv',
		codename: 'GRACE'
	},
	{
		id: 'fw',
		codename: 'GRASS'
	},
	{
		id: 'fx',
		codename: 'GREECE'
	},
	{
		id: 'fy',
		codename: 'GREEN'
	},
	{
		id: 'fz',
		codename: 'GROUND'
	},
	{
		id: 'ga',
		codename: 'HAM'
	},
	{
		id: 'gb',
		codename: 'HAND'
	},
	{
		id: 'gc',
		codename: 'HAWK'
	},
	{
		id: 'gd',
		codename: 'HEAD'
	},
	{
		id: 'ge',
		codename: 'HEART'
	},
	{
		id: 'gf',
		codename: 'HELICOPTER'
	},
	{
		id: 'gg',
		codename: 'HIMALAYAS'
	},
	{
		id: 'gh',
		codename: 'HOLE'
	},
	{
		id: 'gi',
		codename: 'HOLLYWOOD'
	},
	{
		id: 'gj',
		codename: 'HONEY'
	},
	{
		id: 'gk',
		codename: 'HOOD'
	},
	{
		id: 'gl',
		codename: 'HOOK'
	},
	{
		id: 'gm',
		codename: 'HORN'
	},
	{
		id: 'gn',
		codename: 'HORSE'
	},
	{
		id: 'go',
		codename: 'HORSESHOE'
	},
	{
		id: 'gp',
		codename: 'HOSPITAL'
	},
	{
		id: 'gq',
		codename: 'HOTEL'
	},
	{
		id: 'gr',
		codename: 'ICE'
	},
	{
		id: 'gs',
		codename: 'ICE CREAM'
	},
	{
		id: 'gt',
		codename: 'INDIA'
	},
	{
		id: 'gu',
		codename: 'IRON'
	},
	{
		id: 'gv',
		codename: 'IVORY'
	},
	{
		id: 'gw',
		codename: 'JACK'
	},
	{
		id: 'gx',
		codename: 'JAM'
	},
	{
		id: 'gy',
		codename: 'JET'
	},
	{
		id: 'gz',
		codename: 'JUPITER'
	},
	{
		id: 'ha',
		codename: 'KANGAROO'
	},
	{
		id: 'hb',
		codename: 'KETCHUP'
	},
	{
		id: 'hc',
		codename: 'KEY'
	},
	{
		id: 'hd',
		codename: 'KID'
	},
	{
		id: 'he',
		codename: 'KING'
	},
	{
		id: 'hf',
		codename: 'KIWI'
	},
	{
		id: 'hg',
		codename: 'KNIFE'
	},
	{
		id: 'hh',
		codename: 'KNIGHT'
	},
	{
		id: 'hi',
		codename: 'LAB'
	},
	{
		id: 'hj',
		codename: 'LAP'
	},
	{
		id: 'hk',
		codename: 'LASER'
	},
	{
		id: 'hl',
		codename: 'LAWYER'
	},
	{
		id: 'hm',
		codename: 'LEAD'
	},
	{
		id: 'hn',
		codename: 'LEMON'
	},
	{
		id: 'ho',
		codename: 'LEPRECHAUN'
	},
	{
		id: 'hp',
		codename: 'LIFE'
	},
	{
		id: 'hq',
		codename: 'LIGHT'
	},
	{
		id: 'hr',
		codename: 'LIMOUSINE'
	},
	{
		id: 'hs',
		codename: 'LINE'
	},
	{
		id: 'ht',
		codename: 'LINK'
	},
	{
		id: 'hu',
		codename: 'LION'
	},
	{
		id: 'hv',
		codename: 'LITTER'
	},
	{
		id: 'hw',
		codename: 'LOCH NESS'
	},
	{
		id: 'hx',
		codename: 'LOCK'
	},
	{
		id: 'hy',
		codename: 'LOG'
	},
	{
		id: 'hz',
		codename: 'LONDON'
	},
	{
		id: 'ia',
		codename: 'LUCK'
	},
	{
		id: 'ib',
		codename: 'MAIL'
	},
	{
		id: 'ic',
		codename: 'MAMMOTH'
	},
	{
		id: 'id',
		codename: 'MAPLE'
	},
	{
		id: 'ie',
		codename: 'MARBLE'
	},
	{
		id: 'if',
		codename: 'MARCH'
	},
	{
		id: 'ig',
		codename: 'MASS'
	},
	{
		id: 'ih',
		codename: 'MATCH'
	},
	{
		id: 'ii',
		codename: 'MERCURY'
	},
	{
		id: 'ij',
		codename: 'MEXICO'
	},
	{
		id: 'ik',
		codename: 'MICROSCOPE'
	},
	{
		id: 'il',
		codename: 'MILLIONAIRE'
	},
	{
		id: 'im',
		codename: 'MINE'
	},
	{
		id: 'in',
		codename: 'MINT'
	},
	{
		id: 'io',
		codename: 'MISSILE'
	},
	{
		id: 'ip',
		codename: 'MODEL'
	},
	{
		id: 'iq',
		codename: 'MOLE'
	},
	{
		id: 'ir',
		codename: 'MOON'
	},
	{
		id: 'is',
		codename: 'MOSCOW'
	},
	{
		id: 'it',
		codename: 'MOUNT'
	},
	{
		id: 'iu',
		codename: 'MOUSE'
	},
	{
		id: 'iv',
		codename: 'MOUTH'
	},
	{
		id: 'iw',
		codename: 'MUG'
	},
	{
		id: 'ix',
		codename: 'NAIL'
	},
	{
		id: 'iy',
		codename: 'NEEDLE'
	},
	{
		id: 'iz',
		codename: 'NET'
	},
	{
		id: 'ja',
		codename: 'NEW YORK'
	},
	{
		id: 'jb',
		codename: 'NIGHT'
	},
	{
		id: 'jc',
		codename: 'NINJA'
	},
	{
		id: 'jd',
		codename: 'NOTE'
	},
	{
		id: 'je',
		codename: 'NOVEL'
	},
	{
		id: 'jf',
		codename: 'NURSE'
	},
	{
		id: 'jg',
		codename: 'NUT'
	},
	{
		id: 'jh',
		codename: 'OCTOPUS'
	},
	{
		id: 'ji',
		codename: 'OIL'
	},
	{
		id: 'jj',
		codename: 'OLIVE'
	},
	{
		id: 'jk',
		codename: 'OLYMPUS'
	},
	{
		id: 'jl',
		codename: 'OPERA'
	},
	{
		id: 'jm',
		codename: 'ORANGE'
	},
	{
		id: 'jn',
		codename: 'ORGAN'
	},
	{
		id: 'jo',
		codename: 'PALM'
	},
	{
		id: 'jp',
		codename: 'PAN'
	},
	{
		id: 'jq',
		codename: 'PANTS'
	},
	{
		id: 'jr',
		codename: 'PAPER'
	},
	{
		id: 'js',
		codename: 'PARACHUTE'
	},
	{
		id: 'jt',
		codename: 'PARK'
	},
	{
		id: 'ju',
		codename: 'PART'
	},
	{
		id: 'jv',
		codename: 'PASS'
	},
	{
		id: 'jw',
		codename: 'PASTE'
	},
	{
		id: 'jx',
		codename: 'PENGUIN'
	},
	{
		id: 'jy',
		codename: 'PHOENIX'
	},
	{
		id: 'jz',
		codename: 'PIANO'
	},
	{
		id: 'ka',
		codename: 'PIE'
	},
	{
		id: 'kb',
		codename: 'PILOT'
	},
	{
		id: 'kc',
		codename: 'PIN'
	},
	{
		id: 'kd',
		codename: 'PIPE'
	},
	{
		id: 'ke',
		codename: 'PIRATE'
	},
	{
		id: 'kf',
		codename: 'PISTOL'
	},
	{
		id: 'kg',
		codename: 'PIT'
	},
	{
		id: 'kh',
		codename: 'PITCH'
	},
	{
		id: 'ki',
		codename: 'PLANE'
	},
	{
		id: 'kj',
		codename: 'PLASTIC'
	},
	{
		id: 'kk',
		codename: 'PLATE'
	},
	{
		id: 'kl',
		codename: 'PLATYPUS'
	},
	{
		id: 'km',
		codename: 'PLAY'
	},
	{
		id: 'kn',
		codename: 'PLOT'
	},
	{
		id: 'ko',
		codename: 'POINT'
	},
	{
		id: 'kp',
		codename: 'POISON'
	},
	{
		id: 'kq',
		codename: 'POLE'
	},
	{
		id: 'kr',
		codename: 'POLICE'
	},
	{
		id: 'ks',
		codename: 'POOL'
	},
	{
		id: 'kt',
		codename: 'PORT'
	},
	{
		id: 'ku',
		codename: 'POST'
	},
	{
		id: 'kv',
		codename: 'POUND'
	},
	{
		id: 'kw',
		codename: 'PRESS'
	},
	{
		id: 'kx',
		codename: 'PRINCESS'
	},
	{
		id: 'ky',
		codename: 'PUMPKIN'
	},
	{
		id: 'kz',
		codename: 'PUPIL'
	},
	{
		id: 'la',
		codename: 'PYRAMID'
	},
	{
		id: 'lb',
		codename: 'QUEEN'
	},
	{
		id: 'lc',
		codename: 'RABBIT'
	},
	{
		id: 'ld',
		codename: 'RACKET'
	},
	{
		id: 'le',
		codename: 'RAY'
	},
	{
		id: 'lf',
		codename: 'REVOLUTION'
	},
	{
		id: 'lg',
		codename: 'RING'
	},
	{
		id: 'lh',
		codename: 'ROBIN'
	},
	{
		id: 'li',
		codename: 'ROBOT'
	},
	{
		id: 'lj',
		codename: 'ROCK'
	},
	{
		id: 'lk',
		codename: 'ROME'
	},
	{
		id: 'll',
		codename: 'ROOT'
	},
	{
		id: 'lm',
		codename: 'ROSE'
	},
	{
		id: 'ln',
		codename: 'ROULETTE'
	},
	{
		id: 'lo',
		codename: 'ROUND'
	},
	{
		id: 'lp',
		codename: 'ROW'
	},
	{
		id: 'lq',
		codename: 'RULER'
	},
	{
		id: 'lr',
		codename: 'SATELLITE'
	},
	{
		id: 'ls',
		codename: 'SATURN'
	},
	{
		id: 'lt',
		codename: 'SCALE'
	},
	{
		id: 'lu',
		codename: 'SCHOOL'
	},
	{
		id: 'lv',
		codename: 'SCIENTIST'
	},
	{
		id: 'lw',
		codename: 'SCORPION'
	},
	{
		id: 'lx',
		codename: 'SCREEN'
	},
	{
		id: 'ly',
		codename: 'SCUBA DIVER'
	},
	{
		id: 'lz',
		codename: 'SEAL'
	},
	{
		id: 'ma',
		codename: 'SERVER'
	},
	{
		id: 'mb',
		codename: 'SHADOW'
	},
	{
		id: 'mc',
		codename: 'SHAKESPEARE'
	},
	{
		id: 'md',
		codename: 'SHARK'
	},
	{
		id: 'me',
		codename: 'SHIP'
	},
	{
		id: 'mf',
		codename: 'SHOE'
	},
	{
		id: 'mg',
		codename: 'SHOP'
	},
	{
		id: 'mh',
		codename: 'SHOT'
	},
	{
		id: 'mi',
		codename: 'SINK'
	},
	{
		id: 'mj',
		codename: 'SKYSCRAPER'
	},
	{
		id: 'mk',
		codename: 'SLIP'
	},
	{
		id: 'ml',
		codename: 'SLUG'
	},
	{
		id: 'mm',
		codename: 'SMUGGLER'
	},
	{
		id: 'mn',
		codename: 'SNOW'
	},
	{
		id: 'mo',
		codename: 'SNOWMAN'
	},
	{
		id: 'mp',
		codename: 'SOCK'
	},
	{
		id: 'mq',
		codename: 'SOLDIER'
	},
	{
		id: 'mr',
		codename: 'SOUL'
	},
	{
		id: 'ms',
		codename: 'SOUND'
	},
	{
		id: 'mt',
		codename: 'SPACE'
	},
	{
		id: 'mu',
		codename: 'SPELL'
	},
	{
		id: 'mv',
		codename: 'SPIDER'
	},
	{
		id: 'mw',
		codename: 'SPIKE'
	},
	{
		id: 'mx',
		codename: 'SPINE'
	},
	{
		id: 'my',
		codename: 'SPOT'
	},
	{
		id: 'mz',
		codename: 'SPRING'
	},
	{
		id: 'na',
		codename: 'SPY'
	},
	{
		id: 'nb',
		codename: 'SQUARE'
	},
	{
		id: 'nc',
		codename: 'STADIUM'
	},
	{
		id: 'nd',
		codename: 'STAFF'
	},
	{
		id: 'ne',
		codename: 'STAR'
	},
	{
		id: 'nf',
		codename: 'STATE'
	},
	{
		id: 'ng',
		codename: 'STICK'
	},
	{
		id: 'nh',
		codename: 'STOCK'
	},
	{
		id: 'ni',
		codename: 'STRAW'
	},
	{
		id: 'nj',
		codename: 'STREAM'
	},
	{
		id: 'nk',
		codename: 'STRIKE'
	},
	{
		id: 'nl',
		codename: 'STRING'
	},
	{
		id: 'nm',
		codename: 'SUB'
	},
	{
		id: 'nn',
		codename: 'SUIT'
	},
	{
		id: 'no',
		codename: 'SUPERHERO'
	},
	{
		id: 'np',
		codename: 'SWING'
	},
	{
		id: 'nq',
		codename: 'SWITCH'
	},
	{
		id: 'nr',
		codename: 'TABLE'
	},
	{
		id: 'ns',
		codename: 'TABLET'
	},
	{
		id: 'nt',
		codename: 'TAG'
	},
	{
		id: 'nu',
		codename: 'TAIL'
	},
	{
		id: 'nv',
		codename: 'TAP'
	},
	{
		id: 'nw',
		codename: 'TEACHER'
	},
	{
		id: 'nx',
		codename: 'TELESCOPE'
	},
	{
		id: 'ny',
		codename: 'TEMPLE'
	},
	{
		id: 'nz',
		codename: 'THEATER'
	},
	{
		id: 'oa',
		codename: 'THIEF'
	},
	{
		id: 'ob',
		codename: 'THUMB'
	},
	{
		id: 'oc',
		codename: 'TICK'
	},
	{
		id: 'od',
		codename: 'TIE'
	},
	{
		id: 'oe',
		codename: 'TIME'
	},
	{
		id: 'of',
		codename: 'TOKYO'
	},
	{
		id: 'og',
		codename: 'TOOTH'
	},
	{
		id: 'oh',
		codename: 'TORCH'
	},
	{
		id: 'oi',
		codename: 'TOWER'
	},
	{
		id: 'oj',
		codename: 'TRACK'
	},
	{
		id: 'ok',
		codename: 'TRAIN'
	},
	{
		id: 'ol',
		codename: 'TRIANGLE'
	},
	{
		id: 'om',
		codename: 'TRIP'
	},
	{
		id: 'on',
		codename: 'TRUNK'
	},
	{
		id: 'oo',
		codename: 'TUBE'
	},
	{
		id: 'op',
		codename: 'TURKEY'
	},
	{
		id: 'oq',
		codename: 'UNDERTAKER'
	},
	{
		id: 'or',
		codename: 'UNICORN'
	},
	{
		id: 'os',
		codename: 'VACUUM'
	},
	{
		id: 'ot',
		codename: 'VAN'
	},
	{
		id: 'ou',
		codename: 'VET'
	},
	{
		id: 'ov',
		codename: 'WAKE'
	},
	{
		id: 'ow',
		codename: 'WALL'
	},
	{
		id: 'ox',
		codename: 'WAR'
	},
	{
		id: 'oy',
		codename: 'WASHER'
	},
	{
		id: 'oz',
		codename: 'WASHINGTON'
	},
	{
		id: 'pa',
		codename: 'WATCH'
	},
	{
		id: 'pb',
		codename: 'WATER'
	},
	{
		id: 'pc',
		codename: 'WAVE'
	},
	{
		id: 'pd',
		codename: 'WEB'
	},
	{
		id: 'pe',
		codename: 'WELL'
	},
	{
		id: 'pf',
		codename: 'WHALE'
	},
	{
		id: 'pg',
		codename: 'WHIP'
	},
	{
		id: 'ph',
		codename: 'WIND'
	},
	{
		id: 'pi',
		codename: 'WITCH'
	},
	{
		id: 'pj',
		codename: 'WORM'
	},
	{
		id: 'pk',
		codename: 'YARD'
	}
];

let words = codenames.map(index=>{
  return index.codename
})

module.exports = words
