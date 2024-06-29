import { INodeProperties } from "n8n-workflow";

export const FunctionGetWindchillMetaInfoWithIncludeDescendantsDescription: INodeProperties[] = [
	{
		displayName: 'EntityName',
		name: 'EntityName-string(path)',
		description: 'Entity Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					"GET /GetWindchillMetaInfo(EntityName='{EntityName}',IncludeDescendants={IncludeDescendants})",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'IncludeDescendants',
		name: 'IncludeDescendants-boolean(path)',
		description: 'Whether Include Descendants - boolean (path)',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					"GET /GetWindchillMetaInfo(EntityName='{EntityName}',IncludeDescendants={IncludeDescendants})",
				],
			},
		},
		required: true,
	},
];
