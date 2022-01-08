This documents the response from `Type.type.validate ([]) (value)`.

- [For nonEmptyIntegerArray](#for-nonemptyintegerarray)
	- [valid](#valid)
	- [invalid](#invalid)
- [For Undefined](#for-undefined)
	- [valid](#valid-1)
	- [invalid](#invalid-1)

## For nonEmptyIntegerArray

`Type :: $.NonEmpty ($.Array ($.Integer))`

### valid

```js
const nonEmptyIntegerArray = $.NonEmpty ($.Array ($.Integer));
const valid = $.validate (nonEmptyIntegerArray) ([0]);
```

For value `[0]` -> `Right ([0])`


```json
{
	"name": "$$",
	"result": {
		"value": [0]
	},
	"type": {
		"_extractors": {},
		"arity": 1,
		"extractors": {},
		"keys": ["$1"],
		"name": "NonEmpty",
		"supertypes": [],
		"type": "UNARY",
		"types": {
			"$1": {
				"_extractors": {},
				"arity": 1,
				"extractors": {},
				"keys": ["$1"],
				"name": "Array",
				"supertypes": [],
				"type": "UNARY",
				"types": {
					"$1": {
						"_extractors": {},
						"arity": 0,
						"extractors": {},
						"keys": [],
						"name": "Integer",
						"supertypes": [{
							"_extractors": {},
							"arity": 0,
							"extractors": {},
							"keys": [],
							"name": "ValidNumber",
							"supertypes": [{
								"_extractors": {},
								"arity": 0,
								"extractors": {},
								"keys": [],
								"name": "Number",
								"supertypes": [],
								"type": "NULLARY",
								"types": {},
								"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Number"
							}],
							"type": "NULLARY",
							"types": {},
							"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#ValidNumber"
						}],
						"type": "NULLARY",
						"types": {},
						"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Integer"
					}
				},
				"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Array"
			}
		},
		"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#NonEmpty"
	}
}
```

`Left ({"propPath": [], "value": undefined})`

```json
{
	"name": "$1",
	"result": {
		"value": {
			"propPath": []
		}
	},
	"type": {
		"_extractors": {},
		"arity": 1,
		"extractors": {},
		"keys": ["$1"],
		"name": "Array",
		"supertypes": [],
		"type": "UNARY",
		"types": {
			"$1": {
				"_extractors": {},
				"arity": 0,
				"extractors": {},
				"keys": [],
				"name": "Integer",
				"supertypes": [{
					"_extractors": {},
					"arity": 0,
					"extractors": {},
					"keys": [],
					"name": "ValidNumber",
					"supertypes": [{
						"_extractors": {},
						"arity": 0,
						"extractors": {},
						"keys": [],
						"name": "Number",
						"supertypes": [],
						"type": "NULLARY",
						"types": {},
						"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Number"
					}],
					"type": "NULLARY",
					"types": {},
					"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#ValidNumber"
				}],
				"type": "NULLARY",
				"types": {},
				"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Integer"
			}
		},
		"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Array"
	}
}

"Right ({\"typeVarMap\": {}, \"types\": [DateIso]})"
```

### invalid

```js
const nonEmptyIntegerArray = $.NonEmpty ($.Array ($.Integer));
const invalid = $.validate (nonEmptyIntegerArray) ([]);
```

For value `[0]` -> `Left ({"propPath": [], "value": []})`

```json
{
	"name": "$$",
	"result": {
		"value": {
			"value": [],
			"propPath": []
		}
	},
	"type": {
		"_extractors": {},
		"arity": 1,
		"extractors": {},
		"keys": ["$1"],
		"name": "NonEmpty",
		"supertypes": [],
		"type": "UNARY",
		"types": {
			"$1": {
				"_extractors": {},
				"arity": 1,
				"extractors": {},
				"keys": ["$1"],
				"name": "Array",
				"supertypes": [],
				"type": "UNARY",
				"types": {
					"$1": {
						"_extractors": {},
						"arity": 0,
						"extractors": {},
						"keys": [],
						"name": "Integer",
						"supertypes": [{
							"_extractors": {},
							"arity": 0,
							"extractors": {},
							"keys": [],
							"name": "ValidNumber",
							"supertypes": [{
								"_extractors": {},
								"a…e": "Number",
								"supertypes": [],
								"type": "NULLARY",
								"types": {},
								"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Number"
							}],
							"type": "NULLARY",
							"types": {},
							"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#ValidNumber"
						}],
						"type": "NULLARY",
						"types": {},
						"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Integer"
					}
				},
				"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Array"
			}
		},
		"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#NonEmpty"
	}
}
```

`Left ({"propPath": [], "value": undefined})`

```json
{
	"name": "$1",
	"result": {
		"value": {
			"propPath": []
		}
	},
	"type": {
		"_extractors": {},
		"arity": 1,
		"extractors": {},
		"keys": ["$1"],
		"name": "Array",
		"supertypes": [],
		"type": "UNARY",
		"types": {
			"$1": {
				"_extractors": {},
				"arity": 0,
				"extractors": {},
				"keys": [],
				"name": "Integer",
				"supertypes": [{
					"_extractors": {},
					"arity": 0,
					"extractors": {},
					"keys": [],
					"name": "ValidNumber",
					"supertypes": [{
						"_extractors": {},
						"arity": 0,
						"extractors": {},
						"keys": [],
						"name": "Number",
						"supertypes": [],
						"type": "NULLARY",
						"types": {},
						"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Number"
					}],
					"type": "NULLARY",
					"types": {},
					"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#ValidNumber"
				}],
				"type": "NULLARY",
				"types": {},
				"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Integer"
			}
		},
		"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Array"
	}
}
```



## For Undefined

`Type :: $.Undefined`

### valid

```js
const valid   = $.validate ($.Undefined) (undefined);
```

`Right (undefined)`

```json
{
	"name": "$$",
	"result": {},
	"type": {
		"_extractors": {},
		"arity": 0,
		"extractors": {},
		"keys": [],
		"name": "Undefined",
		"supertypes": [],
		"type": "NULLARY",
		"types": {},
		"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Undefined"
	}
}
```

### invalid

```js
const invalid = $.validate ($.Undefined) (1);
```

`Left ({"propPath": [], "value": 1})`

```json
{
	"name": "$$",
	"result": {
		"value": {
			"value": 1,
			"propPath": []
		}
	},
	"type": {
		"_extractors": {},
		"arity": 0,
		"extractors": {},
		"keys": [],
		"name": "Undefined",
		"supertypes": [],
		"type": "NULLARY",
		"types": {},
		"url": "https://github.com/sanctuary-js/sanctuary-def/tree/v0.22.0#Undefined"
	}
}
```
