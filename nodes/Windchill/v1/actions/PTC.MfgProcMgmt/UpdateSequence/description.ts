import { INodeProperties } from "n8n-workflow";

export const UpdateSequenceDescription: INodeProperties[] = [
	{
		displayName: 'SequenceId',
		name: 'SequenceId-string(path)',
		description: 'Sequence ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /Sequences('{SequenceId}')",
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
					"PATCH /Sequences('{SequenceId}')",
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
					"PATCH /Sequences('{SequenceId}')",
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
				displayName: 'BranchingLag',
				name: 'BranchingLag',
				description: 'Branching Lag - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Name',
				name: 'Name',
				description: 'Name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Number',
				name: 'Number',
				description: 'Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ReturnLag',
				name: 'ReturnLag',
				description: 'Return Lag - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'ReturnOperation',
				name: 'ReturnOperation',
				description: 'Return Operation - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Subtype',
				name: 'Subtype',
				description: 'Subtype - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'View',
				name: 'View',
				description: 'View - string',
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
					"PATCH /Sequences('{SequenceId}')",
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
		default: '{\n\t"View": "string",\n\t"Name": "string",\n\t"Subtype": "string",\n\t"BranchingLag": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"ReturnOperation": "string",\n\t"Number": "string",\n\t"ReturnLag": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Description": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /Sequences('{SequenceId}')",
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
