import { INodeProperties } from "n8n-workflow";

export const FunctionGetChangeLinkTypeWithChangeObjectTypeContainerDescription: INodeProperties[] = [
	{
		displayName: 'LinkBaseType',
		name: 'LinkBaseType-string(path)',
		description: 'Link Base Type - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /GetChangeLinkType(LinkBaseType='{LinkBaseType}',ChangeObjectType='{ChangeObjectType}',Container='{Container}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ChangeObjectType',
		name: 'ChangeObjectType-string(path)',
		description: 'Change Object Type - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /GetChangeLinkType(LinkBaseType='{LinkBaseType}',ChangeObjectType='{ChangeObjectType}',Container='{Container}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'Container',
		name: 'Container-string(path)',
		description: 'Container - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /GetChangeLinkType(LinkBaseType='{LinkBaseType}',ChangeObjectType='{ChangeObjectType}',Container='{Container}')",
				],
			},
		},
		required: true,
	},
];
