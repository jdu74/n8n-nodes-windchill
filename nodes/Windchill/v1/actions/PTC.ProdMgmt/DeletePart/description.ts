import { INodeProperties } from "n8n-workflow";

export const DeletePartDescription: INodeProperties[] = [
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"DELETE /Parts('{PartId}')",
				],
			},
		},
		required: true,
	},
];
