import { INodeProperties } from "n8n-workflow";

export const DeleteProcessMaterialDescription: INodeProperties[] = [
	{
		displayName: 'ProcessMaterialId',
		name: 'ProcessMaterialId-string(path)',
		description: 'Process Material ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /ProcessMaterials('{ProcessMaterialId}')",
				],
			},
		},
		required: true,
	},
];
