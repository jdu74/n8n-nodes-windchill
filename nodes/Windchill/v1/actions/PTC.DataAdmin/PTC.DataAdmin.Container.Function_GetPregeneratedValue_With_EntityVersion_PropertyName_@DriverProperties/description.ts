import { INodeProperties } from "n8n-workflow";

export const PtcDataAdminContainerFunctionGetPregeneratedValueWithEntityVersionPropertyNameDriverPropertiesDescription: INodeProperties[] = [
	{
		displayName: 'ContainerId',
		name: 'ContainerId-string(path)',
		description: 'Container ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DataAdmin',
				],
				operation: [
					"GET /Containers('{ContainerId}')/PTC.DataAdmin.GetPregeneratedValue(EntityName='{EntityName}',EntityVersion='{EntityVersion}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EntityName',
		name: 'EntityName-string(path)',
		description: 'Entity Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DataAdmin',
				],
				operation: [
					"GET /Containers('{ContainerId}')/PTC.DataAdmin.GetPregeneratedValue(EntityName='{EntityName}',EntityVersion='{EntityVersion}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EntityVersion',
		name: 'EntityVersion-string(path)',
		description: 'Entity Version - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DataAdmin',
				],
				operation: [
					"GET /Containers('{ContainerId}')/PTC.DataAdmin.GetPregeneratedValue(EntityName='{EntityName}',EntityVersion='{EntityVersion}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PropertyName',
		name: 'PropertyName-string(path)',
		description: 'Property Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DataAdmin',
				],
				operation: [
					"GET /Containers('{ContainerId}')/PTC.DataAdmin.GetPregeneratedValue(EntityName='{EntityName}',EntityVersion='{EntityVersion}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
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
						displayName: '@DriverProperties',
						name: '@DriverProperties-string(query)',
						description: 'Driver Properties - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.DataAdmin',
				],
				operation: [
					"GET /Containers('{ContainerId}')/PTC.DataAdmin.GetPregeneratedValue(EntityName='{EntityName}',EntityVersion='{EntityVersion}',PropertyName='{PropertyName}',DriverProperties=@DriverProperties)",
				],
			},
		},
	},
];
