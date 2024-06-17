import { INodeProperties } from "n8n-workflow";

export const UpdateWorkCenterDescription: INodeProperties[] = [
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
					"PATCH /WorkCenters('{WorkCenterId}')",
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
					"PATCH /WorkCenters('{WorkCenterId}')",
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
					"PATCH /WorkCenters('{WorkCenterId}')",
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
				displayName: 'DefaultUnit',
				name: 'DefaultUnit',
				description: 'Default Unit - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Department',
				name: 'Department',
				description: 'Department - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'DimensionX',
				name: 'DimensionX',
				description: 'Dimension X - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'DimensionY',
				name: 'DimensionY',
				description: 'Dimension Y - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'DimensionZ',
				name: 'DimensionZ',
				description: 'Dimension Z - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'ERPValidationCode',
				name: 'ERPValidationCode',
				description: 'Erp Validation Code - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'External',
				name: 'External',
				description: 'Whether External - boolean',
				type: 'boolean',
				default: false,
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
				displayName: 'Plant',
				name: 'Plant',
				description: 'Plant - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Precision',
				name: 'Precision',
				description: 'Precision - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Source',
				name: 'Source',
				description: 'Source - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'StandardLaborCost',
				name: 'StandardLaborCost',
				description: 'Standard Labor Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardLaborTime',
				name: 'StandardLaborTime',
				description: 'Standard Labor Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardMoveCost',
				name: 'StandardMoveCost',
				description: 'Standard Move Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardMoveTime',
				name: 'StandardMoveTime',
				description: 'Standard Move Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardOtherCost',
				name: 'StandardOtherCost',
				description: 'Standard Other Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardOtherTime',
				name: 'StandardOtherTime',
				description: 'Standard Other Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardProcessingCost',
				name: 'StandardProcessingCost',
				description: 'Standard Processing Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardProcessingTime',
				name: 'StandardProcessingTime',
				description: 'Standard Processing Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardQueueCost',
				name: 'StandardQueueCost',
				description: 'Standard Queue Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardQueueTime',
				name: 'StandardQueueTime',
				description: 'Standard Queue Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardSetupCost',
				name: 'StandardSetupCost',
				description: 'Standard Setup Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardSetupTime',
				name: 'StandardSetupTime',
				description: 'Standard Setup Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardTeardownCost',
				name: 'StandardTeardownCost',
				description: 'Standard Teardown Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardTeardownTime',
				name: 'StandardTeardownTime',
				description: 'Standard Teardown Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardWaitingCost',
				name: 'StandardWaitingCost',
				description: 'Standard Waiting Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StandardWaitingTime',
				name: 'StandardWaitingTime',
				description: 'Standard Waiting Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'StopEffectivityPropagation',
				name: 'StopEffectivityPropagation',
				description: 'Whether Stop Effectivity Propagation - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Usage',
				name: 'Usage',
				description: 'Usage - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'View',
				name: 'View',
				description: 'View - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'WorkingVolumeX',
				name: 'WorkingVolumeX',
				description: 'Working Volume X - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'WorkingVolumeY',
				name: 'WorkingVolumeY',
				description: 'Working Volume Y - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'WorkingVolumeZ',
				name: 'WorkingVolumeZ',
				description: 'Working Volume Z - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /WorkCenters('{WorkCenterId}')",
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
		default: '{\n\t"DimensionZ": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StandardQueueCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"DimensionX": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"View": "string",\n\t"StandardTeardownCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"WorkingVolumeX": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StopEffectivityPropagation": true,\n\t"StandardMoveCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StandardOtherCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Number": "string",\n\t"StandardProcessingCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StandardWaitingTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StandardSetupTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StandardLaborTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"External": true,\n\t"DimensionY": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"ERPValidationCode": "string",\n\t"Name": "string",\n\t"Source": "string",\n\t"WorkingVolumeY": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StandardOtherTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"DefaultUnit": "string",\n\t"Usage": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"StandardProcessingTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StandardSetupCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Description": "string",\n\t"WorkingVolumeZ": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Department": "string",\n\t"StandardMoveTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StandardTeardownTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Precision": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StandardLaborCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Plant": "string",\n\t"StandardWaitingCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"StandardQueueTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /WorkCenters('{WorkCenterId}')",
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
