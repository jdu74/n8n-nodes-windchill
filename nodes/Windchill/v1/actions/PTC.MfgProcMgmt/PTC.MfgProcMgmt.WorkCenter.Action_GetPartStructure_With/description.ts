import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtWorkCenterActionGetPartStructureWithDescription: INodeProperties[] = [
	{
		displayName: 'WorkCenterId',
		name: 'WorkCenterId-string(path)',
		description: 'Work Center ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetPartStructure",
				],
			},
		},
		required: true,
	},
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetPartStructure",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetPartStructure",
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
					"POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetPartStructure",
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
				displayName: 'NavigationCriteria',
				name: 'NavigationCriteria',
				description: 'Navigation Criteria - object',
				type: 'json',
				default: '{\n\t"ApplyToTopLevelObject": true,\n\t"Name": "string",\n\t"UseDefaultForUnresolved": true,\n\t"ApplicationName": "string",\n\t"SharedToAll": true,\n\t"HideUnresolvedDependents": true,\n\t"Centricity": true,\n\t"ApplicableType": "string",\n\t"ConfigSpecs": [\n\t\t{\n\t\t\t"ConfigSpec": "string"\n\t\t}\n\t],\n\t"Filters": [\n\t\t{\n\t\t\t"Filter": "string"\n\t\t}\n\t],\n\t"ID": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetPartStructure",
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
		default: '{\n\t"NavigationCriteria": {\n\t\t"ApplyToTopLevelObject": true,\n\t\t"Name": "string",\n\t\t"UseDefaultForUnresolved": true,\n\t\t"ApplicationName": "string",\n\t\t"SharedToAll": true,\n\t\t"HideUnresolvedDependents": true,\n\t\t"Centricity": true,\n\t\t"ApplicableType": "string",\n\t\t"ConfigSpecs": [\n\t\t\t{\n\t\t\t\t"ConfigSpec": "string"\n\t\t\t}\n\t\t],\n\t\t"Filters": [\n\t\t\t{\n\t\t\t\t"Filter": "string"\n\t\t\t}\n\t\t],\n\t\t"ID": "string"\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetPartStructure",
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
