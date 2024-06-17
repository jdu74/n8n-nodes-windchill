import { INodeProperties } from "n8n-workflow";

export const PartUsesUpdatePartUseDescription: INodeProperties[] = [
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
					'Part.Uses.UpdatePartUse',
				],
			},
		},
		default: "PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
		options: [
			{
				name: "PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				value: "PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				description: "Update an existing PartUse - patch /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				action: "PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
			},
			{
				name: "PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				value: "PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				description: "Update an existing PartUse - patch /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				action: "PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
			},
			{
				name: "PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				value: "PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				description: "Update an existing PartUse - patch /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				action: "PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
			},
			{
				name: "PATCH /Parts('{PartId}')/Uses('{PartUseId}')",
				value: "PATCH /Parts('{PartId}')/Uses('{PartUseId}')",
				description: "Update an existing PartUse - patch /Parts('{PartId}')/Uses('{PartUseId}')",
				action: "PATCH /Parts('{PartId}')/Uses('{PartUseId}')",
			},
			{
				name: "PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				value: "PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				description: "Update an existing PartUse - patch /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				action: "PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
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
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
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
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
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
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Uses('{PartUseId}')",
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
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Uses('{PartUseId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
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
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.UpdatePartUse',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				],
			},
		},
	},
];
