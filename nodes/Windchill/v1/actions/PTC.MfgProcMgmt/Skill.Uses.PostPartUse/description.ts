import { INodeProperties } from "n8n-workflow";

export const SkillUsesPostPartUseDescription: INodeProperties[] = [
	{
		displayName: 'SkillId',
		name: 'SkillId-string(path)',
		description: 'Skill ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Skills('{SkillId}')/Uses",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Skills('{SkillId}')/Uses",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Skills('{SkillId}')/Uses",
				],
				jsonContentType: [
					'application/json',
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Skills('{SkillId}')/Uses",
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					false,
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Skills('{SkillId}')/Uses",
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					true,
				],
			},
		},
	},
];
