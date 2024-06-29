import { INodeProperties } from "n8n-workflow";

export const NoteMemberLinksUpdateDynamicDocumentMemberDescription: INodeProperties[] = [
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
					"PATCH /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'DynamicDocumentMemberId',
		name: 'DynamicDocumentMemberId-string(path)',
		description: 'Dynamic Document Member ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
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
					"PATCH /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
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
					"PATCH /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
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
				displayName: 'ComponentName',
				name: 'ComponentName',
				description: 'Component Name - string',
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
				displayName: 'FeatureID',
				name: 'FeatureID',
				description: 'Feature ID - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'FeatureNumber',
				name: 'FeatureNumber',
				description: 'Feature Number - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'HasFixedConstraint',
				name: 'HasFixedConstraint',
				description: 'Whether Has Fixed Constraint - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'LayerID',
				name: 'LayerID',
				description: 'Layer ID - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Placed',
				name: 'Placed',
				description: 'Whether Placed - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Quantity',
				name: 'Quantity',
				description: 'Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Required',
				name: 'Required',
				description: 'Whether Required - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Suppressed',
				name: 'Suppressed',
				description: 'Whether Suppressed - boolean',
				type: 'boolean',
				default: false,
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
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
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
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Suppressed": true,\n\t"Placed": true,\n\t"ComponentName": "string",\n\t"Quantity": 0,\n\t"AsStoredChildName": "string",\n\t"HasFixedConstraint": true,\n\t"Required": true,\n\t"LayerID": 0,\n\t"DepType": {\n\t\t"Display": "string",\n\t\t"Value": 0\n\t},\n\t"FeatureID": 0,\n\t"FeatureNumber": 0\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"PATCH /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
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
