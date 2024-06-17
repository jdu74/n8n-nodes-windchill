import { INodeProperties } from "n8n-workflow";

export const PtcProdMgmtPartFunctionGetAssignedExpressionDescription: INodeProperties[] = [
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
					"GET /Parts('{PartId}')/PTC.ProdMgmt.GetAssignedExpression()",
				],
			},
		},
		required: true,
	},
];
