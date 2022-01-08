'use strict';

process.env.NODE_ENV === 'production';

const $ = require ('.');
const Z = require ('sanctuary-type-classes');

//    $DateIso :: NullaryType
const $DateIso = (
  $.NullaryType ('DateIso')
                ('https://www.w3.org/QA/Tips/iso-date')
                ([$.String])
                (x => /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])$/.test (x))
);

const model1 = $.RecordType ({
  date: $DateIso
});

const model2 = $.RecordType ({
  date: $.NonEmpty ($DateIso),
  bool: $.Boolean,
});

const log = x => console.debug (x);

// const valid   = $.validate ($.Undefined) (undefined);
// const invalid = $.validate ($.Undefined) (1);

// const valid   = $.validate (model1) ({date: '2020-04-10'});
// const invalid = $.validate (model1) ({date: '2020-04-100'});

// const valid   = $.validate (model2) ({date: '2020-04-10', bool: false});
// const invalid = $.validate (model2) ({date: '2020-04-100', bool: 'foobar'});
// const invalid = $.validate (model2) ({date: '2020-04-10', bool: 'foobar'});
// const invalid = $.validate (model2) ({date: 123, bool: 'foobar'});
// const invalid = $.validate (model2) ({bool: false});
// const invalid = $.validate (model2) (undefined);

const nonEmptyIntegerArray = $.NonEmpty ($.Array ($.Integer));
// const valid = $.validate (nonEmptyIntegerArray) ([0]);
// const invalid = $.validate (nonEmptyIntegerArray) ([]);
// const invalid = $.validate (NonEmptyIntegerArray) ([0.5]);



// expType.validate :: a -> Right a
// expType.validate (env) ('2020-04-10') -> Right ('2020-04-10')

// Array (Either a b)
// log ('Valid: ');
// log (valid);

// Array (Either a b)
// log (invalid);

testLogModel ();
// testLogDateIso ();

function testLogModel () {
	// log (
		$.test ([]) (model1) ({date: '2020-04-10'})
	// );
	// log (
		$.test ([]) (model1) ({date: '2020-04-100'})
	// );

	$.test ([]) (nonEmptyIntegerArray) ([0])
}

function testLogDateIso () {
	log (
		$.test ([]) ($DateIso) ('2020-04-10')
	);
	log (
		$.test ([]) ($DateIso) ('2020-04-100')
	);
	log (
		$.test ([]) ($DateIso) (2020)
	);
	log (
		$.test ([]) ($DateIso) (new Date ('2020-04-10').toLocaleDateString('se'))
	);
	log (
		$.test ([]) ($DateIso) (new Date ('2020-04-10'))
	);
}