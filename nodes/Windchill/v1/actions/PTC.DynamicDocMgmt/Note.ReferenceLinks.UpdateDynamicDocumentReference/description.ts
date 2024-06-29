import { INodeProperties } from "n8n-workflow";

export const NoteReferenceLinksUpdateDynamicDocumentReferenceDescription: INodeProperties[] = [
	{
		displayName: 'NoteId',
		name: 'NoteId-string(path)',
		description: 'Note ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'DynamicDocumentReferenceId',
		name: 'DynamicDocumentReferenceId-string(path)',
		description: 'Dynamic Document Reference ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
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
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
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
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
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
				displayName: 'AsStoredChildName',
				name: 'AsStoredChildName',
				description: 'As Stored Child Name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'DepType',
				name: 'DepType',
				description: 'Dep Type - object',
				type: 'json',
				default: '{\n\t"Display": "string",\n\t"Value": 0\n}',
			},
			{
				displayName: 'ReferenceType',
				name: 'ReferenceType',
				description: 'Reference Type - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Required',
				name: 'Required',
				description: 'Whether Required - boolean',
				type: 'boolean',
				default: false,
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
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
		default: '{\n\t"ReferenceType": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Required": true,\n\t"DepType": {\n\t\t"Display": "string",\n\t\t"Value": 0\n\t},\n\t"AsStoredChildName": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
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
