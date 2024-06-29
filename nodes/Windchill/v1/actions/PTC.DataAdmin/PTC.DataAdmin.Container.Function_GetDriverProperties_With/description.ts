import { INodeProperties } from "n8n-workflow";

export const PtcDataAdminContainerFunctionGetDriverPropertiesWithDescription: INodeProperties[] = [
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
					"GET /Containers('{ContainerId}')/PTC.DataAdmin.GetDriverProperties(EntityName='{EntityName}')",
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
					"GET /Containers('{ContainerId}')/PTC.DataAdmin.GetDriverProperties(EntityName='{EntityName}')",
				],
			},
		},
		required: true,
	},
];
