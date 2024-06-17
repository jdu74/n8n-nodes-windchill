import { INodeProperties } from "n8n-workflow";

export const ActionGetDepartmentDatasFromPlantWithInlineNavCriteriaDescription: INodeProperties[] = [
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
					'PTC.BomTransformation',
				],
				operation: [
					'POST /GetDepartmentDatasFromPlantWithInlineNavCriteria',
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
					'PTC.BomTransformation',
				],
				operation: [
					'POST /GetDepartmentDatasFromPlantWithInlineNavCriteria',
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
					'PTC.BomTransformation',
				],
				operation: [
					'POST /GetDepartmentDatasFromPlantWithInlineNavCriteria',
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
				displayName: 'categories',
				name: 'categories',
				description: 'Categories - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'departmentDataTypes',
				name: 'departmentDataTypes',
				description: 'Department Data Types - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'locations',
				name: 'locations',
				description: 'Locations - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'NavigationCriteria',
				name: 'NavigationCriteria',
				description: 'Navigation Criteria - object',
				type: 'json',
				default: '{\n\t"CreatedOn": "string",\n\t"ID": "string",\n\t"ApplyToTopLevelObject": true,\n\t"Name": "string",\n\t"ConfigSpecs": [\n\t\t{}\n\t],\n\t"UseDefaultForUnresolved": true,\n\t"ApplicationName": "string",\n\t"LastModified": "string",\n\t"SharedToAll": true,\n\t"HideUnresolvedDependents": true,\n\t"Centricity": true,\n\t"ApplicableType": "string",\n\t"Filters": [\n\t\t{}\n\t]\n}',
			},
			{
				displayName: '* plants',
				name: 'plants',
				description: 'Plants - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'supplyChains',
				name: 'supplyChains',
				description: 'Supply Chains - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					'POST /GetDepartmentDatasFromPlantWithInlineNavCriteria',
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
		default: '{\n\t"categories": [\n\t\t"string"\n\t],\n\t"NavigationCriteria": {\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"ApplyToTopLevelObject": true,\n\t\t"Name": "string",\n\t\t"ConfigSpecs": [\n\t\t\t{}\n\t\t],\n\t\t"UseDefaultForUnresolved": true,\n\t\t"ApplicationName": "string",\n\t\t"LastModified": "string",\n\t\t"SharedToAll": true,\n\t\t"HideUnresolvedDependents": true,\n\t\t"Centricity": true,\n\t\t"ApplicableType": "string",\n\t\t"Filters": [\n\t\t\t{}\n\t\t]\n\t},\n\t"supplyChains": [\n\t\t"string"\n\t],\n\t"locations": [\n\t\t"string"\n\t],\n\t"departmentDataTypes": [\n\t\t"string"\n\t],\n\t"plants": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					'POST /GetDepartmentDatasFromPlantWithInlineNavCriteria',
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
