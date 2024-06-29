import { INodeProperties } from "n8n-workflow";

export const UpdateNoteDescription: INodeProperties[] = [
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
					"PATCH /Notes('{NoteId}')",
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
					"PATCH /Notes('{NoteId}')",
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
					"PATCH /Notes('{NoteId}')",
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
				displayName: 'AuthoringApplication',
				name: 'AuthoringApplication',
				description: 'Authoring Application - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'AuthoringLanguage',
				name: 'AuthoringLanguage',
				description: 'Authoring Language - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'CADName',
				name: 'CADName',
				description: 'Cad Name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Category',
				name: 'Category',
				description: 'Category - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'CheckoutInfo',
				name: 'CheckoutInfo',
				description: 'Checkout Info - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'InformationType',
				name: 'InformationType',
				description: 'Information Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'IsTranslatable',
				name: 'IsTranslatable',
				description: 'Is Translatable - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'PTCDDEXTENDEDDOCTYPE',
				name: 'PTCDDEXTENDEDDOCTYPE',
				description: 'Ptcddextendeddoctype - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'PTCDDLANGUAGE',
				name: 'PTCDDLANGUAGE',
				description: 'Ptcddlanguage - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'PTCDDTRANSLATE',
				name: 'PTCDDTRANSLATE',
				description: 'Ptcddtranslate - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')",
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
		default: '{\n\t"PTCDDEXTENDEDDOCTYPE": "string",\n\t"CheckoutInfo": "string",\n\t"PTCDDTRANSLATE": "string",\n\t"IsTranslatable": "string",\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"PTCDDLANGUAGE": "string",\n\t"CADName": "string",\n\t"AuthoringApplication": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"InformationType": "string",\n\t"AuthoringLanguage": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')",
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
