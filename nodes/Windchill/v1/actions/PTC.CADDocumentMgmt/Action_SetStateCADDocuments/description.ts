import { INodeProperties } from "n8n-workflow";

export const ActionSetStateCadDocumentsDescription: INodeProperties[] = [
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$filter',
						name: '$filter-string(query)',
						description: 'Filter - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$top',
						name: '$top-integer(query)',
						description: 'Top - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$skip',
						name: '$skip-integer(query)',
						description: 'Skip - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$count',
						name: '$count-boolean(query)',
						description: 'Whether Count - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: '$orderby',
						name: '$orderby-string(query)',
						description: 'Orderby - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.CADDocumentMgmt',
				],
				operation: [
					'POST /SetStateCADDocuments',
				],
			},
		},
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
					'PTC.CADDocumentMgmt',
				],
				operation: [
					'POST /SetStateCADDocuments',
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
					'PTC.CADDocumentMgmt',
				],
				operation: [
					'POST /SetStateCADDocuments',
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
				displayName: '* CADDocuments',
				name: 'CADDocuments',
				description: 'Cad Documents - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Latest": true,\n\t\t"SubCategory": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"TypeDisplayName": "string",\n\t\t"MissingDependents": true,\n\t\t"CheckoutState": "string",\n\t\t"WorkInProgressState": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ModifiedBy": "string",\n\t\t"Name": "string",\n\t\t"Version": "string",\n\t\t"Derived": true,\n\t\t"Identity": "string",\n\t\t"Instance": true,\n\t\t"ChangeStatus": {\n\t\t\t"Path": "string",\n\t\t\t"Tooltip": "string"\n\t\t},\n\t\t"LastModified": "string",\n\t\t"CreatedBy": "string",\n\t\t"FileName": "string",\n\t\t"AuthAppVersion": 0,\n\t\t"GeneralStatus": {\n\t\t\t"Path": "string",\n\t\t\t"Tooltip": "string"\n\t\t},\n\t\t"CheckOutStatus": "string",\n\t\t"Revision": "string",\n\t\t"LifeCycleTemplateName": "string",\n\t\t"Category": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"Verified": true,\n\t\t"FolderName": "string",\n\t\t"FamilyTableStatus": 0,\n\t\t"ObjectType": "string",\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"State": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"Number": "string",\n\t\t"FolderLocation": "string",\n\t\t"Generic": true,\n\t\t"TypeIcon": {\n\t\t\t"Path": "string",\n\t\t\t"Tooltip": "string"\n\t\t},\n\t\t"Comments": "string",\n\t\t"CabinetName": "string",\n\t\t"AuthoringApplication": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"OwnerApplication": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"VersionID": "string",\n\t\t"NDVersion": "string",\n\t\t"ShareStatus": {\n\t\t\t"Path": "string",\n\t\t\t"Tooltip": "string"\n\t\t}\n\t}\n]',
			},
			{
				displayName: '* State',
				name: 'State',
				description: 'State - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.CADDocumentMgmt',
				],
				operation: [
					'POST /SetStateCADDocuments',
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
		default: '{\n\t"CADDocuments": [\n\t\t{\n\t\t\t"Latest": true,\n\t\t\t"SubCategory": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"TypeDisplayName": "string",\n\t\t\t"MissingDependents": true,\n\t\t\t"CheckoutState": "string",\n\t\t\t"WorkInProgressState": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"ModifiedBy": "string",\n\t\t\t"Name": "string",\n\t\t\t"Version": "string",\n\t\t\t"Derived": true,\n\t\t\t"Identity": "string",\n\t\t\t"Instance": true,\n\t\t\t"ChangeStatus": {\n\t\t\t\t"Path": "string",\n\t\t\t\t"Tooltip": "string"\n\t\t\t},\n\t\t\t"LastModified": "string",\n\t\t\t"CreatedBy": "string",\n\t\t\t"FileName": "string",\n\t\t\t"AuthAppVersion": 0,\n\t\t\t"GeneralStatus": {\n\t\t\t\t"Path": "string",\n\t\t\t\t"Tooltip": "string"\n\t\t\t},\n\t\t\t"CheckOutStatus": "string",\n\t\t\t"Revision": "string",\n\t\t\t"LifeCycleTemplateName": "string",\n\t\t\t"Category": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"Verified": true,\n\t\t\t"FolderName": "string",\n\t\t\t"FamilyTableStatus": 0,\n\t\t\t"ObjectType": "string",\n\t\t\t"CreatedOn": "string",\n\t\t\t"ID": "string",\n\t\t\t"State": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"Number": "string",\n\t\t\t"FolderLocation": "string",\n\t\t\t"Generic": true,\n\t\t\t"TypeIcon": {\n\t\t\t\t"Path": "string",\n\t\t\t\t"Tooltip": "string"\n\t\t\t},\n\t\t\t"Comments": "string",\n\t\t\t"CabinetName": "string",\n\t\t\t"AuthoringApplication": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"OwnerApplication": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"VersionID": "string",\n\t\t\t"NDVersion": "string",\n\t\t\t"ShareStatus": {\n\t\t\t\t"Path": "string",\n\t\t\t\t"Tooltip": "string"\n\t\t\t}\n\t\t}\n\t],\n\t"State": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.CADDocumentMgmt',
				],
				operation: [
					'POST /SetStateCADDocuments',
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
