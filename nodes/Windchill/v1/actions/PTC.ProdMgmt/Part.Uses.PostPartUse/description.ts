import { INodeProperties } from "n8n-workflow";

export const PartUsesPostPartUseDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
			},
		},
		default: "POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
		options: [
			{
				name: "POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				value: "POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				description: "Create PartUse - post /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				action: "POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
			},
			{
				name: "POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses",
				value: "POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses",
				description: "Create PartUse - post /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses",
				action: "POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses",
			},
			{
				name: "POST /Parts('{PartId}')/UsedBy('{UsedById}')/Uses",
				value: "POST /Parts('{PartId}')/UsedBy('{UsedById}')/Uses",
				description: "Create PartUse - post /Parts('{PartId}')/UsedBy('{UsedById}')/Uses",
				action: "POST /Parts('{PartId}')/UsedBy('{UsedById}')/Uses",
			},
			{
				name: "POST /Parts('{PartId}')/Uses",
				value: "POST /Parts('{PartId}')/Uses",
				description: "Create PartUse - post /Parts('{PartId}')/Uses",
				action: "POST /Parts('{PartId}')/Uses",
			},
			{
				name: "POST /Parts('{PartId}')/Versions('{VersionsId}')/Uses",
				value: "POST /Parts('{PartId}')/Versions('{VersionsId}')/Uses",
				description: "Create PartUse - post /Parts('{PartId}')/Versions('{VersionsId}')/Uses",
				action: "POST /Parts('{PartId}')/Versions('{VersionsId}')/Uses",
			},
		],
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartMadeFromId',
		name: 'PartMadeFromId-string(path)',
		description: 'Part Made From ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'FindNumber',
				name: 'FindNumber',
				description: 'Find Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LineNumber',
				name: 'LineNumber',
				description: 'Line Number - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Occurrences@odata.bind',
				name: 'Occurrences@odata.bind',
				description: 'Occurrences Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Quantity',
				name: 'Quantity',
				description: 'Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'TraceCode',
				name: 'TraceCode',
				description: 'Trace Code - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Unit',
				name: 'Unit',
				description: 'Unit - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: '* Uses@odata.bind',
				name: 'Uses@odata.bind',
				description: 'Uses Odata Bind - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0,\n\t"@odata.type": "string",\n\t"Uses@odata.bind": "string",\n\t"Occurrences@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RevisionsId',
		name: 'RevisionsId-string(path)',
		description: 'Revisions ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'FindNumber',
				name: 'FindNumber',
				description: 'Find Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LineNumber',
				name: 'LineNumber',
				description: 'Line Number - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Occurrences@odata.bind',
				name: 'Occurrences@odata.bind',
				description: 'Occurrences Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Quantity',
				name: 'Quantity',
				description: 'Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'TraceCode',
				name: 'TraceCode',
				description: 'Trace Code - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Unit',
				name: 'Unit',
				description: 'Unit - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: '* Uses@odata.bind',
				name: 'Uses@odata.bind',
				description: 'Uses Odata Bind - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0,\n\t"@odata.type": "string",\n\t"Uses@odata.bind": "string",\n\t"Occurrences@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Uses",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'UsedById',
		name: 'UsedById-string(path)',
		description: 'Used By ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Uses",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'FindNumber',
				name: 'FindNumber',
				description: 'Find Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LineNumber',
				name: 'LineNumber',
				description: 'Line Number - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Occurrences@odata.bind',
				name: 'Occurrences@odata.bind',
				description: 'Occurrences Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Quantity',
				name: 'Quantity',
				description: 'Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'TraceCode',
				name: 'TraceCode',
				description: 'Trace Code - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Unit',
				name: 'Unit',
				description: 'Unit - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: '* Uses@odata.bind',
				name: 'Uses@odata.bind',
				description: 'Uses Odata Bind - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0,\n\t"@odata.type": "string",\n\t"Uses@odata.bind": "string",\n\t"Occurrences@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Uses",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'FindNumber',
				name: 'FindNumber',
				description: 'Find Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LineNumber',
				name: 'LineNumber',
				description: 'Line Number - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Occurrences@odata.bind',
				name: 'Occurrences@odata.bind',
				description: 'Occurrences Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Quantity',
				name: 'Quantity',
				description: 'Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'TraceCode',
				name: 'TraceCode',
				description: 'Trace Code - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Unit',
				name: 'Unit',
				description: 'Unit - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: '* Uses@odata.bind',
				name: 'Uses@odata.bind',
				description: 'Uses Odata Bind - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0,\n\t"@odata.type": "string",\n\t"Uses@odata.bind": "string",\n\t"Occurrences@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Uses",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'VersionsId',
		name: 'VersionsId-string(path)',
		description: 'Versions ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Uses",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'FindNumber',
				name: 'FindNumber',
				description: 'Find Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LineNumber',
				name: 'LineNumber',
				description: 'Line Number - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Occurrences@odata.bind',
				name: 'Occurrences@odata.bind',
				description: 'Occurrences Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Quantity',
				name: 'Quantity',
				description: 'Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'TraceCode',
				name: 'TraceCode',
				description: 'Trace Code - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Unit',
				name: 'Unit',
				description: 'Unit - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: '* Uses@odata.bind',
				name: 'Uses@odata.bind',
				description: 'Uses Odata Bind - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Uses",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0,\n\t"@odata.type": "string",\n\t"Uses@odata.bind": "string",\n\t"Occurrences@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.PostPartUse',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Uses",
				],
			},
		},
	},
];
